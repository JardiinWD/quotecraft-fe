// --> Quote Craft Atoms Types
import type { JSX } from 'react'

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
  tagAs: TTypographyTagName
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
  colorPalette: TCustomColorPalette
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
  type: TFormInputType
}
