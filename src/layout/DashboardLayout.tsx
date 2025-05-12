import React, { type JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Helmet } from '@/components'
import { retrieveHelmetData } from '@/functions/metadata'

const DashboardLayout: React.FC = (): JSX.Element => {
  // -------------- HOOKS
  const location = useLocation()

  // -------------- HELMET DATA
  const { title, description, keywords, route } = retrieveHelmetData(
    location.pathname,
    'dashboard'
  )

  // Check if the user has landed on the /dashboard route
  if (location.pathname === '/dashboard')
    return <Navigate to="/dashboard/invoices" />

  return (
    <div className="flex flex-col w-full h-screen">
      {/* METADATA  */}
      <Helmet
        title={title}
        description={description}
        keywords={keywords}
        route={route}
      />
      {/* OTHER DASHBOARD COMPONENTS */}
      <Outlet />
    </div>
  )
}

export default DashboardLayout
