// --> Possible Application Locales
export type TLocales = 'en' | 'it' | 'de'

// --> Application Config Constants
export const DEFAULT_LANG: TLocales = 'it'
export const DEFAULT_COUNTRY = 'IT'
export const DEFAULT_SUPPORTED_LANGUAGE = ['en', 'it', 'de']

// --> Application Helmets type
export type THelmetMetadata = {
  [key: string]: {
    title: string
    description: string
    keywords: string[]
    route?: string
  }
}

// --> Application Metadata and Configuration
export type TAppConfig = {
  appName: string
  appDeployedUrl: string
  defaultLanguage: TLocales
  supportedLanguages: string[]
  metadata: THelmetMetadata
}

export const appConfig: TAppConfig = {
  appName: 'Quote Craft',
  appDeployedUrl: 'https://myapp.com', // --> To be updated after deployment on Netlify
  defaultLanguage: DEFAULT_LANG,
  supportedLanguages: DEFAULT_SUPPORTED_LANGUAGE,
  metadata: {
    default: {
      title: 'Home',
      description: 'Discover our fantastic services',
      keywords: ['home', 'services'],
      route: '/dashboard'
    },
    invoices: {
      title: 'Invoices',
      description: 'Manage your invoices and payments',
      keywords: ['invoices', 'payments', 'billing'],
      route: '/dashboard/invoices'
    },
    analytics: {
      title: 'Analytics',
      description: 'Analyze your data and performance',
      keywords: ['analytics', 'data', 'performance'],
      route: '/dashboard/analytics'
    },
    parameters: {
      title: 'Parameters',
      description: 'Configure your invoices settings',
      keywords: ['parameters', 'settings', 'configuration'],
      route: '/dashboard/parameters'
    },
    customers: {
      title: 'Customers',
      description: 'Manage your customers and contacts',
      keywords: ['customers', 'contacts', 'management'],
      route: '/dashboard/customers'
    },
    settings: {
      title: 'Settings',
      description: 'Configure your application settings',
      keywords: ['settings', 'configuration', 'preferences'],
      route: '/dashboard/settings'
    },
    singleInvoice: {
      title: 'Single Invoice',
      description: 'View and manage a single invoice',
      keywords: ['single invoice', 'invoice details', 'billing']
    },
    error: {
      title: 'Error',
      description: 'An error occurred',
      keywords: ['error', '404', 'not found'],
      route: '/error'
    },
    login: {
      title: 'Login',
      description: 'Login to your account',
      keywords: ['login', 'authentication', 'access'],
      route: '/auth/login'
    },
    register: {
      title: 'Register',
      description: 'Create a new account',
      keywords: ['register', 'signup', 'create account'],
      route: '/auth/register'
    },
    ['forgot-password']: {
      title: 'Forgot Password',
      description: 'Reset your password',
      keywords: ['forgot password', 'reset password', 'authentication'],
      route: '/auth/forgot-password'
    }
  }
}
