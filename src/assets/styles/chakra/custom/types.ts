// ------------- CHAKRA FONTS
export type TChakraFonts = {
  [key in 'inter' | 'mono' | 'monaco']: {
    value: string
  }
}

// ------------- CHAKRA BORDER RADIUS
export type TChakraBorderRadius = {
  [key in
  | 'none'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | 'full']: {
    value: string | number
  }
}

// ------------- CHAKRA FONT SIZES
export type TChakraFontSizes = {
  [key in
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl']: {
    value: string | number
  }
}

// ------------- CHAKRA FONT WEIGHTS
export type TChakraFontWeights = {
  [key in
  | 'hairline'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black']: {
    value: number
  }
}

// ------------- CHAKRA LINE HEIGHTS
export type TChakraLineHeights = {
  [key in
  | 'normal'
  | 'none'
  | 'shorter'
  | 'short'
  | 'base'
  | 'tall'
  | 'taller']: {
    value: string | number
  }
}

// ------------- CHAKRA CUSTOM COLORS
type SingleColorToken = { value: string }


export type TChakraCustomColors = {
  // For basic colors
  primary: SingleColorToken
  secondary: SingleColorToken

  // For semantic colors with different shades
  gray: Record<string, SingleColorToken>
  black: Record<string, SingleColorToken>
  red: Record<string, SingleColorToken>
  cyan: Record<string, SingleColorToken>
  blue: Record<string, SingleColorToken>
  teal: Record<string, SingleColorToken>
  green: Record<string, SingleColorToken>
  orange: Record<string, SingleColorToken>
}

// ------------- CHAKRA CUSTOM STYLE
export type TChakraCustomStyle = {
  fonts: TChakraFonts
  radii: TChakraBorderRadius
  fontSizes: TChakraFontSizes
  fontWeights: TChakraFontWeights
  lineHeights: TChakraLineHeights
  colors: TChakraCustomColors
}
