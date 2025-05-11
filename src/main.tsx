import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
// --> Providers
import {
  HelmetProvider,
  ReactRouterProvider,
  ErrorBoundaryProvider,
  ChakraProvider
} from '@/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundaryProvider>
      <ChakraProvider>
        <HelmetProvider>
          <ReactRouterProvider />
        </HelmetProvider>
      </ChakraProvider>
    </ErrorBoundaryProvider>
  </StrictMode>
)
