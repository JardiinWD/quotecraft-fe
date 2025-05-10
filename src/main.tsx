import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
// --> Providers
import {
  HelmetProvider,
  ReactRouterProvider,
  ErrorBoundaryProvider
} from '@/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundaryProvider>
      <HelmetProvider>
        <ReactRouterProvider />
      </HelmetProvider>
    </ErrorBoundaryProvider>
  </StrictMode>
)
