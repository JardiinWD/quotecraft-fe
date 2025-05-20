import { MockAuthApi } from '@/api'
import { IAuthData } from '@/api/types'
import { LoginForm } from '@/components/molecules'
import { transformJwtExpirationDate } from '@/functions/common'
import { useAuthStore } from '@/stores'
import { jwtDecode } from 'jwt-decode'
import React, { JSX, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

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

  throw new Error('useLoaderData is not defined')

  // -------------- LOADER DATA
  const translations = useLoaderData()

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
      translations={translations as Record<string, string>}
      authenticationError={state.authenticationError as string}
      onSubmit={handleLogin}
    />
  )
}

export default Login
