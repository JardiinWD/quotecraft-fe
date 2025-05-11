import { Navigate, type RouteObject } from 'react-router-dom'

const Default: RouteObject = {
  path: '/',
  element: <Navigate to="/dashboard/invoices" replace />
}

export default Default
