import React, { JSX } from 'react'
import { IProtectedRouteProps } from '@/components/atoms/types'
import { useAuthStore } from '@/stores'
import { Navigate } from 'react-router-dom'
import { useCheckJWTExpiration } from '@/hooks'

/**
 * @description ProtectedRoute is a component that wraps its children with a div element.
 * It is used to protect certain routes in the application.
 * @param {JSX.Element} children - Represents the content to be rendered within the ProtectedRoute.
 * @returns  {JSX.Element} - A div element containing the children.
 */
const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
  children
}): JSX.Element => {
  // -------------- ZUSTAND STORE
  const userId = useAuthStore((state) => state.userId)
  const token = useAuthStore((state) => state.userData?.accessToken)
  const expirationDate = useAuthStore((state) => state.expirationDate)

  // -------------- CHECK IF TOKEN IS EXPIRED
  useCheckJWTExpiration(expirationDate)

  // -------------- REDIRECT TO LOGIN
  if (!userId || !token) return <Navigate to="/auth/login" replace />

  return children
}

export default ProtectedRoute
