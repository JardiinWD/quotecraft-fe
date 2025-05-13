import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
// --> Providers
import {
  HelmetProvider,
  ReactRouterProvider,
  ErrorBoundaryProvider,
  ChakraProvider,
  QueryProvider
} from '@/providers'
import { LanguageSetter } from '@/components/atoms'

LanguageSetter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundaryProvider>
      <QueryProvider>
        <ChakraProvider>
          <HelmetProvider>
            <ReactRouterProvider />
            <LanguageSetter />
          </HelmetProvider>
        </ChakraProvider>
      </QueryProvider>
    </ErrorBoundaryProvider>
  </StrictMode>
)
