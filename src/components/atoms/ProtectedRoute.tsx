import React, { type JSX } from 'react'

// -------------- INTERFACES
interface IProtectedRouteProps {
  children: JSX.Element
}

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
  return children
}

export default ProtectedRoute
