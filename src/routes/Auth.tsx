import { type RouteObject } from 'react-router-dom'
// --> Pages
import { Login, Register, ForgotPassword } from '@/pages'
// --> Layouts
import { AuthLayout } from '@/layout'

const Auth: RouteObject = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      caseSensitive: true,
      element: <Login />,
      errorElement: <div>Auth Error Page</div>
    },
    {
      path: 'register',
      caseSensitive: true,
      element: <Register />,
      errorElement: <div>Auth Error Page</div>
    },
    {
      path: 'forgot-password',
      caseSensitive: true,
      element: <ForgotPassword />,
      errorElement: <div>Auth Error Page</div>
    }
  ],
  errorElement: <div>Auth Error Page</div>
}

export default Auth
