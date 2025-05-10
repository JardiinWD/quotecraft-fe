import { appConfig } from "@/config/metadata"

/**
 * @description Retrieves the meta tag data based on the current route.
 * @param {string} pathname - The pathname of the current route.
 * @returns the meta tag data for the current route.
 */
export const retrieveHelmetData = (pathname: string) => {
    // Remove leading and trailing slashes from the pathname
    const path =
        pathname === '/'
            ? 'homepage'
            : pathname.split('/').filter((path) => path !== '')[0]
    // Retrieve the helmet data based on the path
    const helmetData = appConfig.metadata[path] || appConfig.metadata.default
    // Get the title, description, keywords, and route from the helmet data
    const { title, description, keywords, route } = helmetData
    // Return the meta tag data
    return { title, description, keywords, route }
}