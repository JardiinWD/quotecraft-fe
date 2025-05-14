import { RegisterFormEmptyState } from '@/components/molecules'
import React, { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'

const Register: React.FC = (): JSX.Element => {
  // -------------- LOADER DATA
  const translations = useLoaderData()

  return <RegisterFormEmptyState translations={translations} />
}

export default Register
