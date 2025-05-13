import { TChakraCustomStyle } from '@/assets/styles/chakra/custom/types'

// --> Chakra UI fonts
export const ChakraFonts: TChakraCustomStyle['fonts'] = {
  // --> Inter font
  inter: {
    value:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
  },
  // --> Monospace font
  mono: {
    value:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  // --> Monaco font
  monaco: {
    value: "Monaco, Menlo, 'Ubuntu Mono', 'Courier New', monospace"
  }
}
