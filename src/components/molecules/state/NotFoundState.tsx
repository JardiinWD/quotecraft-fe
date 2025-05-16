import { Images } from '@/assets/images'
import { Button, Image } from '@/components/atoms'
import { EmptyState } from '@/components/molecules'
import { INotFoundStateProps } from '@/components/molecules/types'
import React, { JSX } from 'react'
import { Link, useRouteError } from 'react-router-dom'

/**
 * @description NotFoundState component - Displays a not found state with an error message and a button to go back.
 * @param {INotFoundStateProps} props - Props for the NotFoundState component
 * @param {string} message - Optional message to display
 * @param {string} errorTitle - Optional title for the error
 * @param {string} devMessage - Optional developer message for debugging
 * @param {string} redirectTo - Optional redirect URL
 * @param {IGenericStyleProperties} styleProperties - Optional style properties for the component
 * @param {React.ReactNode} customIcon - Optional custom icon to display
 * @param {string} buttonText - Optional text for the button
 * @param {TGenericTranslations} translations - Optional translations object
 */
const NotFoundState: React.FC<INotFoundStateProps> = ({
  message = 'It seems like you have landed on a page that does not exist.',
  errorTitle = 'Ops! Something went wrong',
  devMessage,
  redirectTo = '/dashboard/invoices',
  styleProperties = {
    width: ['100%', '100%', '100%', '100%'],
    minWidth: ['100%', '100%', '100%', '100%']
  },
  customIcon = (
    <Image
      src={Images.Error404}
      alt="404 Error"
      dataTestId="error-404-image"
      htmlWidth={200}
      htmlHeight={200}
    />
  ),
  buttonText = 'Go Back'
}): JSX.Element => {
  // ---------- USE ROUTE ERROR HOOK
  const error = useRouteError()

  const errorMessage =
    error && typeof error === 'object' && 'message' in error
      ? (error as { message: string }).message
      : 'Unknown error occurred'

  return (
    <EmptyState
      icon={customIcon}
      dataTestId="not-found"
      emptyStateId="not-found"
      styleProperties={{
        width: styleProperties.width,
        minWidth: styleProperties.minWidth,
        height: 'fit-content',
        backgroundColor: { light: 'gray.50', dark: 'gray.600' },
        borderRadius: 'md',
        display: 'flex',
        direction: 'column',
        justify: 'center',
        align: 'center',
        wrap: 'nowrap',
        as: 'div',
        boxShadow: 'lg',
        gap: 4,
        padding: 8
      }}
      title={errorTitle} // TODO : ADD TRANSLATIONS
      description={message} // TODO : ADD TRANSLATIONS
      devMessage={devMessage ?? errorMessage}
      goBackButton={
        <Link to={redirectTo} replace={true}>
          <Button
            size="md"
            buttonText={buttonText}
            variant="solid"
            disabled={false}
            spinnerPlacement="start"
            rounded="lg"
            type="button"
            buttonId="goback-register-empty-button"
            dataTestId="goback-register-empty-button"
            padding="0.5rem 1rem"
            fontWeight="bold"
            width={['auto', 'auto', 'auto', '12.5rem']}
          />
        </Link>
      }
    />
  )
}

export default NotFoundState
