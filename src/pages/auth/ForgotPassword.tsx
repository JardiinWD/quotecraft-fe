import React, { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ForgotPasswordFormEmptyState } from '@/components/molecules'

const ForgotPassword: React.FC = (): JSX.Element => {
  // -------------- LOADER DATA
  const translations = useLoaderData()

  return <ForgotPasswordFormEmptyState translations={translations} />
}

export default ForgotPassword
