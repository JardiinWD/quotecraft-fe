import React, { JSX } from 'react'
import { EmptyState } from '@/components/molecules'
import { FaInfoCircle } from 'react-icons/fa'
import { Button } from '@/components/atoms'
import { IForgotPasswordFormEmptyStateProps } from '@/components/molecules/types'
import { Link } from 'react-router-dom'

/**
 * @description ForgotPasswordFormEmptyState component
 * @param {TGenericTranslations} translations - Optional translations object
 */
const ForgotPasswordFormEmptyState: React.FC<
  IForgotPasswordFormEmptyStateProps
> = ({ translations }): JSX.Element => {
  return (
    <EmptyState
      icon={<FaInfoCircle size={48} color="#14b8a6" />}
      dataTestId="forgot-password-empty"
      emptyStateId="forgot-password-empty"
      title={translations?.['forgot-password-empty-state-title']}
      description={translations?.['forgot-password-empty-state-description']}
      goBackButton={
        <Link to="/auth/login">
          <Button
            size="md"
            buttonText={translations?.['goback-forgot-password-empty-button']}
            variant="solid"
            disabled={false}
            spinnerPlacement="start"
            rounded="lg"
            type="button"
            buttonId="goback-forgot-password-empty-button"
            dataTestId="goback-forgot-password-empty-button"
            padding="0.5rem 1rem"
            fontWeight="bold"
            width={['auto', 'auto', 'auto', '12.5rem']}
          />
        </Link>
      }
    />
  )
}

export default ForgotPasswordFormEmptyState
