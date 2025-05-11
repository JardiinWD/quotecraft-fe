import { type RouteObject } from 'react-router-dom'
// --> Pages
import { SingleInvoice } from '@/pages'
// --> Layouts
import { InvoiceLayout } from '@/layout'
// --> Components
import { ProtectedRoute } from '@/components'

const Invoice: RouteObject = {
  path: '/invoices/:id',
  element: (
    <ProtectedRoute>
      <InvoiceLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '',
      caseSensitive: true,
      element: <SingleInvoice />,
      errorElement: <div>Single Invoice Error</div>
    }
  ]
}

export default Invoice
