import React, { JSX } from 'react'
import { EmptyState } from '@/components/molecules'
import { FaInfoCircle } from 'react-icons/fa'
import { Button } from '@/components/atoms'
import { IRegisterFormEmptyStateProps } from '@/components/molecules/types'
import { Link } from 'react-router-dom'

/**
 * @description RegisterFormEmptyState component
 * @param {TGenericTranslations} translations - Optional translations object
 */
const RegisterFormEmptyState: React.FC<IRegisterFormEmptyStateProps> = ({
  translations
}): JSX.Element => {
  return (
    <EmptyState
      icon={<FaInfoCircle size={48} color="#14b8a6" />}
      dataTestId="register-empty"
      emptyStateId="register-empty"
      title={translations?.['register-empty-state-title']}
      description={translations?.['register-empty-state-description']}
      goBackButton={
        <Link to="/auth/login">
          <Button
            size="md"
            buttonText={translations?.['goback-register-empty-button']}
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

export default RegisterFormEmptyState
