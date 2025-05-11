import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'

/**
 * @description ReactRouterProvider wraps its children with a RouterProvider to provide routing functionality.
 * @returns {JSX.Element} The RouterProvider component with the router prop.
 */
export const ReactRouterProvider = () => {
  return <RouterProvider router={router} />
}
