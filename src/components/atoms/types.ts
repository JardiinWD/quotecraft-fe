// --> Quote Craft Atoms Types
import { JSX } from 'react'

// -------------
// ------------- COMMON
// -------------

// --> Possible Rounding types

type TCustomRounded =
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

type TCustomColorPalette =
  | 'gray'
  | 'black'
  | 'red'
  | 'cyan'
  | 'blue'
  | 'teal'
  | 'green'
  | 'orange'

export type TCustomSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// -------------
// ------------- HELMET
// -------------
export interface IHelmetProps {
  title: string
  description: string
  keywords?: string[]
  route?: string
}

// -------------
// ------------- PROTECTED ROUTE
// -------------
export interface IProtectedRouteProps {
  children: JSX.Element
}

// -------------
// ------------- TYPOGRAPHY
// -------------

// --> Possible tag names
export type TTypographyTagName = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label'
>

// --> Possible font weights
export type TTypographyWeight =
  | 'regular'
  | 'medium'
  | 'bold'
  | 'normal'
  | 'light'

// --> Typography props
export interface ITypographyProps {
  tagAs?: TTypographyTagName
  fontFamily?: string
  textId?: string
  textColor?: string
  textLineHeight?: string
  textStyle?: string
  weight: TTypographyWeight
  text: string
  className?: string
  style?: React.CSSProperties
  uppercase?: boolean
  htmlString?: string
  whiteSpace?: boolean
  htmlFor?: string
  dataTestId?: string
  fontSize?: TCustomSize
}

// -------------
// ------------- BUTTON
// -------------

// --> Button Variants
export type TButtonVariant = 'solid' | 'outline' | 'ghost' | 'plain' | 'surface'

// --> Button props
export interface IButtonProps {
  size: TCustomSize
  variant: TButtonVariant
  colorPalette?: TCustomColorPalette
  backgroundColor?: string
  textColor?: string
  buttonText?: string
  icon?: JSX.Element
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  spinnerPlacement?: 'start' | 'end'
  customSpinner?: JSX.Element
  rounded?: TCustomRounded
  onClick?: () => void
  formId?: string
  type?: 'button' | 'submit' | 'reset'
  buttonId?: string
  dataTestId?: string
  padding?: string
  className?: string
  fontSize?: TCustomSize
  fontWeight?: string
  width?: string | number
}

// -------------
// ------------- INPUT
// -------------

type TFormInputType = 'text' | 'email' | 'password'

export interface IInputProps {
  variant?: 'subtle' | 'outline' | 'flushed'
  size?: TCustomSize
  isRequired?: boolean
  helperText?: string
  label?: string
  errorText?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  dataTestId?: string
  inputClassName?: string
  inputId?: string
  type?: TFormInputType
  register?: ReturnType<any>
  className?: string
}

// -------------
// ------------- FLEX CONTAINER
// -------------

// --> Possible Options for flex container Tag
export type TFlexContainerTag =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'nav'
  | 'header'
  | 'footer'
// --> Possible flex directions options
export type TFlexContainerDirections = 'row' | 'column'
// --> Possible flex justify content options
export type TFlexContainerJustify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
// --> Possible flex align items options
export type TFlexContainerAlign =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch'
// --> Possible flex wrap options
export type TFlexContainerWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

export interface IFlexContainerProps {
  children: React.ReactNode
  direction?: TFlexContainerDirections
  justify?: TFlexContainerJustify
  align?: TFlexContainerAlign
  wrap?: TFlexContainerWrap
  gap?: number
  className?: string
  style?: React.CSSProperties
  flexContainerId?: string
  as?: TFlexContainerTag
  dataTestId?: string
  backgroundColor?: string
  padding?: string | number
  margin?: string | number
}

// -------------
// ------------- IMAGE
// -------------

// --> Possible image fit options
export type TImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'

// --> Possible image options
export interface IImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  htmlWidth?: number
  htmlHeight?: number
  fit?: TImageFit
  dataTestId?: string
}
