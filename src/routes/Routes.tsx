import { createBrowserRouter } from 'react-router-dom'
// --> Pages
import {
  Login,
  Register,
  ForgotPassword,
  Analytics,
  Invoices,
  Parameters,
  Settings,
  Customers,
  SingleInvoice
} from '@/pages'
// --> Layouts
import { AuthLayout, DashboardLayout, InvoiceLayout } from '@/layout'
// --> Components
import { ProtectedRoute } from '@/components'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        caseSensitive: true,
        element: <Login />
        // errorElement: <div>Auth Error Page</div>,
      },
      {
        path: 'register',
        caseSensitive: true,
        element: <Register />
        // errorElement: <div>Auth Error Page</div>,
      },
      {
        path: 'forgot-password',
        caseSensitive: true,
        element: <ForgotPassword />
        // errorElement: <div>Auth Error Page</div>,
      }
    ]
    // errorElement: <div>Auth Error Page</div>,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/invoices',
        caseSensitive: true,
        element: <Invoices />
        // errorElement: <div>Dashboard Error</div>,
      },
      {
        path: '/analytics',
        caseSensitive: true,
        element: <Analytics />
        // errorElement: <div>Dashboard Error</div>,
      },
      {
        path: '/parameters',
        caseSensitive: true,
        element: <Parameters />
        // errorElement: <div>Dashboard Error</div>,
      },
      {
        path: '/customers',
        caseSensitive: true,
        element: <Customers />
        // errorElement: <div>Dashboard Error</div>,
      },
      {
        path: '/settings',
        caseSensitive: true,
        element: <Settings />
        // errorElement: <div>Dashboard Error</div>,
      }
    ]
  },
  {
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
        element: <SingleInvoice />
        // errorElement: <div>Single Invoice Error</div>,
      }
    ]
  }
])

export default router
