import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import {
  ChakraColors,
  ChakraFonts,
  ChakraBorderRadius,
  ChakraFontSizes,
  ChakraFontWeights,
  ChakraLineHeights
} from './custom'

const config = defineConfig({
  theme: {
    tokens: {
      colors: ChakraColors,
      fonts: ChakraFonts,
      fontSizes: ChakraFontSizes,
      radii: ChakraBorderRadius,
      fontWeights: ChakraFontWeights,
      lineHeights: ChakraLineHeights
    }
  }
})

const ChakraThemeSystem = createSystem(defaultConfig, config)

export default ChakraThemeSystem
