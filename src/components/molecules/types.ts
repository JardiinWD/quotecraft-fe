// --> Quote Craft Molecules Types
import { type TLoginFormValues } from '@/components/molecules/forms/schema'
import {
  IGenericStyleProperties,
  TCustomSize,
  TGenericTranslations
} from '@/components/types'
import { JSX } from 'react'

// ------------- GENERIC EMPTY STATE

export interface IGenericEmptyStateProps {
  title?: string
  description?: string
  devMessage?: string
  icon?: React.ReactNode
  goBackButton?: React.ReactNode
  styleProperties?: IGenericStyleProperties
  dataTestId?: string
  emptyStateId?: string
  actionButton?: React.ReactNode
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
// ------------- EMPTY STATES
// -------------

// ------------- REGISTER FORM EMPTY STATE

export interface IRegisterFormEmptyStateProps extends TGenericTranslations {}

// ------------- FORGOT PASSWORD FORM EMPTY STATE

export interface IForgotPasswordFormEmptyStateProps
  extends TGenericTranslations {}

// ------------- NOT FOUND STATE

export interface INotFoundStateProps extends TGenericTranslations {
  message?: string
  errorTitle?: string
  statusText?: string
  devMessage?: string
  redirectTo?: string
  styleProperties?: IGenericStyleProperties
  customIcon?: React.ReactNode
  buttonText?: string
  goBackButton?: React.ReactNode
}

// ------------- NOT FOUND STATE
export interface IEmptyInvoiceStateProps extends TGenericTranslations {
  message?: string
  errorTitle?: string
  statusText?: string
  devMessage?: string
  redirectTo?: string
  createButtonText?: string
  onActionButtonClick?: () => void
  emptyStateId?: string
}

// -------------
// ------------- SIDEBAR COMPONENTS
// -------------

export interface NavItemProps {
  icon: React.ElementType
  navLinkText: string
  navLinkContext?: string
  to: string
  isActive?: boolean
}

// -------------
// ------------- DIALOGS
// -------------

// ------------- BASE DIALOGS

type TDialogMotionPreset =
  | 'slide-in-bottom'
  | 'slide-in-top'
  | 'scale'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'none'

type TDialogPlacement = 'top' | 'bottom' | 'center'

export interface IBaseDialogsProps {
  placement?: TDialogPlacement
  motionPreset?: TDialogMotionPreset
  size?: TCustomSize
  title?: string
  hasModalBackdrop?: boolean
  isModalOpen?: boolean
  dialogId?: string
  /* BUTTONS */
  hasCloseButton?: boolean
  hasDismissButton?: boolean
  hasConfirmButton?: boolean
  confirmButtonText?: string
  dismissButtonText?: string
  onConfirmButtonClick?: () => void
  onDismissButtonClick?: () => void
  content?: JSX.Element | string
}

// ------------- LOGOUT DIALOG
export interface ILogoutDialogProps extends IBaseDialogsProps {}

// -------------
// ------------- EMPTY CARD
// -------------

export interface IEmptyCardProps {
  cardMessage?: string
  cardError?: string
  buttonText?: string
  onClickHandler?: () => void
  dataTestId?: string
}
