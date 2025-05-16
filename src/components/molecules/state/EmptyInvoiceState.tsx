import { Button } from '@/components/atoms'
import { EmptyState } from '@/components/molecules'
import { IEmptyInvoiceStateProps } from '@/components/molecules/types'
import React, { JSX } from 'react'
import { MdOutlineDataArray } from 'react-icons/md'
import { Link } from 'react-router-dom'

/**
 * @description NotFoundState component - Displays a not found state with an error message and a button to go back.
 * @param {INotFoundStateProps} props - Props for the NotFoundState component
 * @param {string} message - Optional message to display
 * @param {string} errorTitle - Optional title for the error
 * @param {string} devMessage - Optional developer message for debugging
 * @param {string} redirectTo - Optional redirect URL
 * @param {IGenericStyleProperties} styleProperties - Optional style properties for the component
 * @param {React.ReactNode} customIcon - Optional custom icon to display
 * @param {TGenericTranslations} translations - Optional translations object
 */
const EmptyInvoiceState: React.FC<IEmptyInvoiceStateProps> = ({
  message = 'There is no data to display at this time. Create a new invoice to get started.',
  errorTitle = 'No Data Available',
  devMessage,
  redirectTo = '/dashboard/invoices'
}): JSX.Element => {
  return (
    <EmptyState
      icon={
        <MdOutlineDataArray className="scale-150" size={68} color="#14b8a6" />
      }
      dataTestId="empty-invoices-state"
      emptyStateId="empty-invoices-state"
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
            buttonText={'Create New Invoice'}
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

export default EmptyInvoiceState
