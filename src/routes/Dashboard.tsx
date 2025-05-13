import { type RouteObject } from 'react-router-dom'
// --> Pages
import { Analytics, Customers, Invoices, Parameters, Settings } from '@/pages'
// --> Layouts
import { DashboardLayout } from '@/layout'
// --> Components
import { ProtectedRoute } from '@/components/atoms'

const Dashboard: RouteObject = {
  path: '/dashboard',
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: 'invoices',
      caseSensitive: true,
      element: <Invoices />,
      errorElement: <div>Dashboard Error</div>
    },
    {
      path: 'analytics',
      caseSensitive: true,
      element: <Analytics />,
      errorElement: <div>Dashboard Error</div>
    },
    {
      path: 'parameters',
      caseSensitive: true,
      element: <Parameters />,
      errorElement: <div>Dashboard Error</div>
    },
    {
      path: 'customers',
      caseSensitive: true,
      element: <Customers />,
      errorElement: <div>Dashboard Error</div>
    },
    {
      path: 'settings',
      caseSensitive: true,
      element: <Settings />,
      errorElement: <div>Dashboard Error</div>
    }
  ]
}

export default Dashboard
