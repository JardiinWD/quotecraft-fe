import React, { JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { FlexContainer, Helmet } from '@/components/atoms'
import { retrieveHelmetData } from '@/functions/metadata'
import { Sidebar, Navbar } from '@/components/organisms'

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
    <div className="flex flex-row justify-end items-end w-full h-screen">
      {/* METADATA  */}
      <Helmet
        title={title}
        description={description}
        keywords={keywords}
        route={route}
      />
      {/* SIDEBAR */}
      <Sidebar />
      {/* NAVBAR */}
      <Navbar />
      {/* OTHER DASHBOARD COMPONENTS */}
      <FlexContainer
        dataTestId={`${title}-dashboard-layout`}
        flexContainerId={`${title}-dashboard-layout`}
        direction="row"
        justify="center"
        align="center"
        additionalStyleProperties={{
          width: 'calc(100% - 12.5rem)',
          height: 'calc(100% - 5rem)',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
        backgroundColor={{
          light: 'gray.200',
          dark: 'gray.600'
        }}
      >
        <Outlet />
      </FlexContainer>
    </div>
  )
}

export default DashboardLayout
