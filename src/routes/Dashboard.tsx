import { type RouteObject } from 'react-router-dom'
// --> Pages
import { Analytics, Customers, Invoices, Parameters, Settings } from '@/pages'
// --> Layouts
import { DashboardLayout } from '@/layout'
// --> Components
import { ProtectedRoute } from '@/components/atoms'
import { NotFoundState } from '@/components/molecules'
import { MockInvoicesApi } from '@/api'
import { TMockedResources } from '@/api/types'

/** Retrieves translations for a given page and method.
 * @param {TCollections} page - The name of the page to retrieve the translations for.
 * @param {TPocketMethod} method - The method to use to retrieve the translations.
 * @returns {Promise<{translations: TGroupedItems}>} A promise that resolves to an object containing the translations.
 * @example - const {translations} = await loadTranslations('homepage', 'SDK');
 */
const loadDashboardData = async (resource: TMockedResources) => {
  // Get the Data from the API
  const { data, error, status } = await MockInvoicesApi.getResource(resource)

  // Return the Data
  return {
    data: data,
    error: error,
    status: status
  }
}

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
      loader: async () => {
        // Load the translations for the login page
        const { data, error, status } = await loadDashboardData('posts')

        return { data, error, status }
      }
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
      element: (
        <NotFoundState
          styleProperties={{
            width: ['30%', '30%', '30%', '30%']
          }}
        />
      )
    }
  ]
}

export default Dashboard
