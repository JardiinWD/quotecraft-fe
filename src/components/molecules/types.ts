// --> Quote Craft Molecules Types
import { type TLoginFormValues } from '@/components/molecules/forms/schema'

// -------------
// ------------- GENERIC TYPES
// -------------

export type TGenericTranslations = {
  translations?: {
    [key: string]: string
  }
}

// -------------
// ------------- LOGIN FORM
// -------------

export interface ILoginFormProps extends TGenericTranslations {
  formId?: string
  authenticationError?: string
  onSubmit: (data: TLoginFormValues) => void
}
