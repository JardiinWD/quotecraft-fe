import React, { type JSX } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* OTHER AUTH COMPONENTS */}
      <Outlet />
    </div>
  )
}

export default AuthLayout
