import React, { JSX } from 'react'
import { EmptyState } from '@/components/molecules'
import { FaInfoCircle } from 'react-icons/fa'
import { Button } from '@/components/atoms'
import { IRegisterFormEmptyStateProps } from '@/components/molecules/types'
import { Link } from 'react-router-dom'

/**
 * @description RegisterFormEmptyState component
 * @param {object} translations - Optional translations object
 */
const RegisterFormEmptyState: React.FC<IRegisterFormEmptyStateProps> = ({
  translations
}): JSX.Element => {
  return (
    <EmptyState
      icon={<FaInfoCircle size={48} color="#22c55e" />}
      dataTestId="register-empty"
      emptyStateId="register-empty"
      title={translations?.['register-empty-state-title'] as string}
      description={translations?.['register-empty-state-description'] as string}
      goBackButton={
        <Link to="/auth/login">
          <Button
            size="md"
            buttonText={
              translations?.['goback-register-empty-button'] as string
            }
            variant="solid"
            disabled={false}
            spinnerPlacement="start"
            rounded="lg"
            onClick={() => console.log('Go Back')}
            formId="register-form"
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

export default RegisterFormEmptyState
