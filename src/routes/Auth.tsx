import { type RouteObject } from 'react-router-dom'
// --> Pages
import { Login, Register, ForgotPassword, BaseError } from '@/pages'
// --> Layouts
import { AuthLayout } from '@/layout'
// --> API Layers
import { AppWriteApi } from '@/api'
// --> Components
import { NotFoundState } from '@/components/molecules'

// --> Handlers

/** Retrieves translations for a given page and method.
 * @param {TCollections} page - The name of the page to retrieve the translations for.
 * @param {TPocketMethod} method - The method to use to retrieve the translations.
 * @returns {Promise<{translations: TGroupedItems}>} A promise that resolves to an object containing the translations.
 * @example - const {translations} = await loadTranslations('homepage', 'SDK');
 */
const loadApiTranslations = async (
  databaseId: string,
  collectionId: string
) => {
  // Get the Data from the API
  const { data } = await AppWriteApi.getCollectionFromAppwriteDB(
    databaseId, // DATABASE _ID
    collectionId // COLLECTION _ID
  )
  // Retrieve the Locale
  const { locale } = await AppWriteApi.getNavigatorLocale()

  // Return the Data
  return {
    translations: data,
    lang: locale.language,
    countryCode: locale.countryCode
  }
}

const Auth: RouteObject = {
  path: '/auth',
  element: <AuthLayout />,
  errorElement: <BaseError />,
  children: [
    {
      path: 'login',
      caseSensitive: true,
      element: <Login />,
      errorElement: <BaseError />,
      loader: async () => {
        // Load the translations for the login page
        const { translations } = await loadApiTranslations(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_LOGIN_COLLECTION_ID
        )
        return translations
      }
    },
    {
      path: 'register',
      caseSensitive: true,
      element: <Register />,
      errorElement: <BaseError />,
      loader: async () => {
        // Load the translations for the login page
        const { translations } = await loadApiTranslations(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_REGISTER_COLLECTION_ID
        )
        return translations
      }
    },
    {
      path: 'forgot-password',
      caseSensitive: true,
      element: <ForgotPassword />,
      errorElement: <BaseError />,
      loader: async () => {
        // Load the translations for the login page
        const { translations } = await loadApiTranslations(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_FORGOT_PASSWORD_COLLECTION_ID
        )
        return translations
      }
    },
    {
      path: '*',
      caseSensitive: true,
      element: (
        <NotFoundState
          redirectTo="/auth/login"
          styleProperties={{
            width: ['30%', '30%', '30%', '30%'],
            minWidth: ['30%', '30%', '30%', '30%']
          }}
        />
      )
    }
  ]
}

export default Auth
