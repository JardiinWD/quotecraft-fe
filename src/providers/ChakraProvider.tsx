import { ChakraThemeSystem } from '@/assets/styles/chakra'
import { ChakraProvider as ReactChakraProvider } from '@chakra-ui/react'
import React, { type JSX } from 'react'

// -------------- INTERFACES
interface IChakraProviderProps {
  children: React.ReactNode
  customFallback?: JSX.Element
}

/**
 * @description ChakraProvider wraps its children with a Chakra UI provider to provide theming and styling capabilities.
 * @param {IChakraProviderProps} children - Represents the content to be rendered within the Chakra provider.
 */
export const ChakraProvider: React.FC<IChakraProviderProps> = ({
  children
}) => {
  return (
    <ReactChakraProvider value={ChakraThemeSystem}>
      {children}
    </ReactChakraProvider>
  )
}
