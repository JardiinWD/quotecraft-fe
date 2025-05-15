// -------------
// ------------- COMMON
// -------------

// --> Possible Rounding types

export type TCustomRounded =
  | 'none'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | 'full'

// --> Possible Custom Color Palettes
export type TCustomColorPalette =
  | 'gray'
  | 'black'
  | 'red'
  | 'cyan'
  | 'blue'
  | 'teal'
  | 'green'
  | 'orange'

// --> Possible Custom Sizes
export type TCustomSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// --> Possible Darkmode Color Ready
export type TDarkmodeColorReady = {
  light: string
  dark: string
}

// --> Possible Generic Translations
export type TGenericTranslations = {
  translations?: {
    [key: string]: string
  }
}

// --> Possible Options for flex container Tag
export type TGenericContainerTag =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'nav'
  | 'header'
  | 'footer'
// --> Possible flex directions options
export type TGenericContainerDirections = 'row' | 'column'
// --> Possible flex justify content options
export type TGenericContainerJustify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
// --> Possible flex align items options
export type TGenericContainerAlign =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch'

// --> Possible flex wrap options
export type TGenericContainerWrap = 'wrap' | 'nowrap' | 'wrap-reverse'
// --> Possible Display options
export type TGenericDisplay =
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'grid'
  | 'inline-flex'
  | 'inline-grid'

// --> Generic Empty State Props
export interface IGenericStyleProperties {
  width?: string[] | string | number | number[]
  height?: string | string[] | number
  textColor?: TDarkmodeColorReady
  outlineColor?: TDarkmodeColorReady
  backgroundColor?: TDarkmodeColorReady
  borderColor?: TDarkmodeColorReady
  borderWidth?: number
  focusBorderColor?: TDarkmodeColorReady
  borderRadius?: TCustomRounded
  fontSize?: TCustomSize
  direction?: TGenericContainerDirections
  justify?: TGenericContainerJustify
  align?: TGenericContainerAlign
  wrap?: TGenericContainerWrap
  as?: TGenericContainerTag
  display?: TGenericDisplay
  boxShadow?: TCustomSize
  gap?: number
  padding?: number
  margin?: number
}
