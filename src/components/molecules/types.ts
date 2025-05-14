// --> Quote Craft Molecules Types
import { type TLoginFormValues } from '@/components/molecules/forms/schema'
import {
  IGenericStyleProperties,
  TGenericTranslations
} from '@/components/types'

// ------------- GENERIC EMPTY STATE

export interface IGenericEmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  goBackButton?: React.ReactNode
  styleProperties?: IGenericStyleProperties
  dataTestId?: string
  emptyStateId?: string
}

// -------------
// ------------- LOGIN FORM
// -------------

export interface ILoginFormProps extends TGenericTranslations {
  formId?: string
  authenticationError?: string
  onSubmit: (data: TLoginFormValues) => void
}

// -------------
// ------------- REGISTER FORM EMPTY STATE
// -------------

export interface IRegisterFormEmptyStateProps extends TGenericTranslations {}
