import { appConfig } from '@/config/metadata'

type TBaseRoute = 'auth' | 'dashboard' | 'invoices'

/**
 * @description Retrieves the meta tag data based on the current route.
 * @param {string} pathname - The pathname of the current route.
 * @param {TBaseRoute} baseRoute - The base route (e.g. 'auth', 'dashboard') to remove from path.
 * @returns the meta tag data for the current route.
 */
export const retrieveHelmetData = (
  pathname: string,
  baseRoute?: TBaseRoute
) => {
  // Remove leading and trailing slashes from the pathname
  let path = pathname === '/' ? 'home' : pathname

  // If a baseRoute is provided, extract the sub-path
  if (baseRoute && path.startsWith(`/${baseRoute}/`)) {
    // Extract the part after the baseRoute (e.g., 'login' from '/auth/login')
    path = path.slice(baseRoute.length + 2) // +2 for the two slashes
  }

  // Retrieve the helmet data based on the path
  const helmetData = appConfig.metadata[path]?.route
    ? appConfig.metadata[path]
    : appConfig.metadata.default

  // Get the title, description, keywords, and route from the helmet data
  const { title, description, keywords, route } = helmetData

  // Return the meta tag data
  return { title, description, keywords, route }
}
