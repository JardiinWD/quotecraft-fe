import { Button } from '@/components/atoms'
import { EmptyState } from '@/components/molecules'
import { IEmptyInvoiceStateProps } from '@/components/molecules/types'
import React, { JSX } from 'react'
import { MdOutlineDataArray } from 'react-icons/md'
import { Link } from 'react-router-dom'

/**
 * @description EmptyinvoiceState component - Displays a empty invoice state with an error message and a button to go create a new invoice.
 * @param {INotFoundStateProps} props - Props for the NotFoundState component
 * @param {string} message - Optional message to display
 * @param {string} errorTitle - Optional title for the error
 * @param {string} devMessage - Optional developer message for debugging
 * @param {string} redirectTo - Optional redirect URL
 * @param {IGenericStyleProperties} styleProperties - Optional style properties for the component
 * @param {React.ReactNode} customIcon - Optional custom icon to display
 * @param {string} buttonText - Optional text for the button
 * @param {string} emptyStateId - Optional ID for the empty state
 * @param {() => void} onActionButtonClick - Optional callback function for button click
 * @param {string} createButtonText - Optional text for the create button
 * @param {TGenericTranslations} translations - Optional translations object
 */
const EmptyInvoiceState: React.FC<IEmptyInvoiceStateProps> = ({
  message = 'There is no data to display at this time. Create a new invoice to get started.',
  errorTitle = 'No Data Available',
  devMessage,
  redirectTo = '/dashboard/invoices',
  createButtonText = 'Create New Invoice',
  onActionButtonClick = () => {},
  emptyStateId = 'empty-invoice-state'
}): JSX.Element => {
  return (
    <EmptyState
      icon={
        <MdOutlineDataArray className="scale-150" size={68} color="#14b8a6" />
      }
      dataTestId={`${emptyStateId}`}
      emptyStateId={`${emptyStateId}`}
      styleProperties={{
        width: ['100%', '100%', '100%', '100%'],
        height: 'fit-content',
        backgroundColor: { light: 'gray.50', dark: 'gray.600' },
        borderRadius: 'md',
        display: 'flex',
        direction: 'column',
        justify: 'center',
        align: 'center',
        wrap: 'nowrap',
        as: 'div',
        gap: 4,
        padding: 8
      }}
      title={errorTitle} // TODO : ADD TRANSLATIONS
      description={message} // TODO : ADD TRANSLATIONS
      devMessage={devMessage}
      actionButton={
        <Link to={redirectTo}>
          <Button
            size="md"
            buttonText={createButtonText}
            onClick={onActionButtonClick}
            variant="solid"
            disabled={false}
            spinnerPlacement="start"
            rounded="lg"
            type="button"
            buttonId={`${emptyStateId}-button`}
            dataTestId={`${emptyStateId}-button`}
            padding="0.5rem 1rem"
            fontWeight="bold"
            width={['auto', 'auto', 'auto', '12.5rem']}
          />
        </Link>
      }
    />
  )
}

export default EmptyInvoiceState
