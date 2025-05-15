import { Button } from '@/components/atoms'
import { EmptyState } from '@/components/molecules'
import { INotFoundStateProps } from '@/components/molecules/types'
import React, { JSX } from 'react'
import { TbError404 } from 'react-icons/tb'
import { Link, useRouteError } from 'react-router-dom'

const NotFoundState: React.FC<INotFoundStateProps> = ({
  message = 'It seems like you have landed on a page that does not exist.',
  errorTitle = 'Ops! Something went wrong',
  devMessage
}): JSX.Element => {
  // ---------- USE ROUTE ERROR HOOK
  const error = useRouteError()

  console.log('error', error)

  const errorMessage =
    error && typeof error === 'object' && 'message' in error
      ? (error as { message: string }).message
      : 'Unknown error occurred'

  return (
    <EmptyState
      icon={<TbError404 className="scale-150" size={68} color="#14b8a6" />}
      dataTestId="not-found-state"
      emptyStateId="not-found-state"
      styleProperties={{
        width: ['30%', '30%', '30%', '30%'],
        height: 'fit-content',
        backgroundColor: { light: 'gray.100', dark: 'gray.500' },
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
        <Link to="/dashboard/invoices">
          <Button
            size="md"
            buttonText={'Go Back'}
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
