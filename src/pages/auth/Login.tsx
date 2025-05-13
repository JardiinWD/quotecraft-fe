import { LoginForm } from '@/components/molecules'
import React, { JSX, useState } from 'react'
import { useAuthStore } from '@/stores'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { transformJwtExpirationDate } from '@/functions/common'
import { IMockAuthApi } from '@/api'
import { IAuthData } from '@/api/types'

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
      } = await IMockAuthApi.handleLogin(data.username, data.password)
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
      authenticationError={state.authenticationError as string}
      onSubmit={handleLogin}
    />
  )
}

export default Login
