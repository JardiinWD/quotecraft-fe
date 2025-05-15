import { type RouteObject } from 'react-router-dom'
// --> Pages
import { Analytics, Customers, Invoices, Parameters, Settings } from '@/pages'
// --> Layouts
import { DashboardLayout } from '@/layout'
// --> Components
import { ProtectedRoute } from '@/components/atoms'
import { NotFoundState } from '@/components/molecules'

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
      element: <Invoices />
    },
    {
      path: 'analytics',
      caseSensitive: true,
      element: <Analytics />
    },
    {
      path: 'parameters',
      caseSensitive: true,
      element: <Parameters />
    },
    {
      path: 'customers',
      caseSensitive: true,
      element: <Customers />
    },
    {
      path: 'settings',
      caseSensitive: true,
      element: <Settings />
    },
    {
      path: '*',
      caseSensitive: true,
      element: <NotFoundState />
    }
  ]
}

export default Dashboard
