// --> Quote Craft Atoms Types
import { JSX } from 'react'
import {
  TCustomColorPalette,
  TCustomRounded,
  TCustomSize,
  TDarkmodeColorReady,
  TGenericContainerDirections,
  TGenericContainerJustify,
  TGenericContainerAlign,
  TGenericContainerWrap,
  TGenericContainerTag,
  IGenericStyleProperties
} from '@/components/types'

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
  textColor?: TDarkmodeColorReady
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
  textColor?: TDarkmodeColorReady
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
  width?: IGenericStyleProperties['width']
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

export interface IFlexContainerProps {
  children: React.ReactNode
  direction?: TGenericContainerDirections
  justify?: TGenericContainerJustify
  align?: TGenericContainerAlign
  wrap?: TGenericContainerWrap
  gap?: number
  className?: string
  style?: React.CSSProperties
  flexContainerId?: string
  as?: TGenericContainerTag
  dataTestId?: string
  backgroundColor?: TDarkmodeColorReady
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
