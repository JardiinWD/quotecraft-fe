import React, { type JSX } from 'react'
import type { IProtectedRouteProps } from '@/components/atoms/types'
import { useAuthStore } from '@/stores'
import { Navigate } from 'react-router-dom'

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
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  // -------------- REDIRECT TO LOGIN
  if (!isLoggedIn) return <Navigate to="/auth/login" replace />

  return children
}

export default ProtectedRoute
