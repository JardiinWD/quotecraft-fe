import React, { type JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Helmet } from '@/components/atoms'
import { retrieveHelmetData } from '@/functions/metadata'

const AuthLayout: React.FC = (): JSX.Element => {
  // -------------- HOOKS
  const location = useLocation()

  // -------------- HELMET DATA
  const { title, description, keywords, route } = retrieveHelmetData(
    location.pathname,
    'auth'
  )

  // Check if the user has landed on the /dashboard route
  if (location.pathname === '/auth') return <Navigate to="/auth/login" />

  return (
    <div>
      {/* METADATA  */}
      <Helmet
        title={title}
        description={description}
        keywords={keywords}
        route={route}
      />
      {/* OTHER AUTH COMPONENTS */}
      <Outlet />
    </div>
  )
}

export default AuthLayout
