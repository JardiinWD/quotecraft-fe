import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
// --> Providers
import { ReactRouterProvider, ChakraProvider, QueryProvider } from '@/providers'
import { LanguageSetter } from '@/components/atoms'

LanguageSetter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <ChakraProvider>
        <ReactRouterProvider />
        <LanguageSetter />
      </ChakraProvider>
    </QueryProvider>
  </StrictMode>
)
