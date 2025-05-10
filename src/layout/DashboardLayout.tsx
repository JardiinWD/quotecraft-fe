import React, { type JSX } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-screen bg-blue-500">
      {/* OTHER DASHBOARD COMPONENTS */}
      <Outlet />
    </div>
  )
}

export default DashboardLayout
