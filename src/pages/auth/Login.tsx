import { LoginForm } from '@/components/molecules'
import React, { JSX, useState } from 'react'
import { useAuthStore } from '@/stores'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { transformJwtExpirationDate } from '@/functions/common'
import { AppWriteApi, MockAuthApi } from '@/api'
import { IAuthData } from '@/api/types'
import { useQuery } from '@tanstack/react-query'

// -------------- INTERFACES
interface IState {
  authenticationError: string | null
}

const Login: React.FC = (): JSX.Element => {
  // -------------- STATE
  const [state, setState] = useState<IState>({
    authenticationError: null
  })

  // -------------- HOOKS
  const navigate = useNavigate()

  // -------------- API CALLS
  const { data: apiData } = useQuery({
    queryKey: ['products'],
    staleTime: 5000,
    queryFn: async () => {
      // Get the Data from the API
      const { data, error, status } =
        await AppWriteApi.getCollectionFromAppwriteDB(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_LOGIN_COLLECTION_ID
        )

      // Check if the response is valid
      if (error || status !== 'success') throw new Error(`${error as string}`)

      // Retrieve the Locale
      const { locale } = await AppWriteApi.getNavigatorLocale()
      // Return the necessary data
      return {
        translations: data,
        lang: locale.language,
        countryCode: locale.countryCode
      }
    }
  })

  // -------------- HANDLERS

  /**
   * @description handleLogin function to handle the login process
   * @param {data} data - The data object containing username and password
   */
  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      // Invoke the API call to handle login
      const {
        data: authData,
        error: authError,
        status: authStatus
      } = await MockAuthApi.handleLogin(data.username, data.password)
      // If there are Any error occured then catch it
      if (authError || authStatus !== 'success')
        throw new Error(`${authError as string}`)
      // Else if the response is valid then set the token and userId in the store
      if (authData) {
        // Decode the Received JWT Token in order to retrieve expiration date
        const decodedToken = jwtDecode(authData.accessToken)
        // Set the proper variables to the Zustand Store
        useAuthStore.setState({
          userId: `${authData.id}`,
          userData: authData as IAuthData,
          expirationDate: transformJwtExpirationDate(decodedToken.exp as number)
        })
        // Navigate to Home
        navigate('/dashboard/invoices', {
          replace: true
        })
      }
    } catch (error) {
      console.error('Something Went Wrong during Authentication!', error)
      setState((prevState) => ({
        ...prevState,
        authenticationError: error instanceof Error ? error.message : null
      }))
    }
  }

  return (
    <LoginForm
      translations={apiData?.translations as Record<string, string>}
      authenticationError={state.authenticationError as string}
      onSubmit={handleLogin}
    />
  )
}

export default Login
