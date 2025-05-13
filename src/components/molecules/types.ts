// --> Quote Craft Molecules Types
import { type TLoginFormValues } from '@/components/molecules/forms/schema'


// -------------
// ------------- LOGIN FORM
// -------------

export interface ILoginFormProps {
    formId?: string
    authenticationError?: string
    onSubmit: (data: TLoginFormValues) => void
}