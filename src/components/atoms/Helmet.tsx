import type { JSX } from 'react'
import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet-async'

// -------------- INTERFACES
interface IHelmetProps {
  title: string
  description: string
  keywords?: string[]
  route?: string
}

/**
 * @description Helmet is a component that wraps its children with a React Helmet component.
 * It is used to manage the document head of the application.
 * @param {string} title - Represents the title of the page.
 * @param {string} description - Represents the description of the page.
 * @param {string[]} keywords - Represents the keywords for SEO purposes.
 * @param {string} route - Represents the route of the page.
 * @returns  {JSX.Element} - A React Helmet component with the provided props.
 */
const Helmet: React.FC<IHelmetProps> = ({
  title = 'Helmet Title for this page',
  description = 'Helmet Description for this page',
  keywords = [],
  route = ''
}): JSX.Element => {
  return (
    <ReactHelmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {route && <link rel="canonical" href={`https://example.com${route}`} />}
    </ReactHelmet>
  )
}

export default Helmet
