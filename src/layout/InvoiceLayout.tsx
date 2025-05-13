import React, { JSX } from 'react'
import { Outlet } from 'react-router-dom'

const InvoiceLayout: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* OTHER INVOICE COMPONENTS */}
      <Outlet />
    </div>
  )
}

export default InvoiceLayout
