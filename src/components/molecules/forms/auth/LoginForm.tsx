import React, { type JSX } from 'react'
import { Box } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  loginSchema,
  type TLoginFormValues
} from '@/components/molecules/forms/schema'
import type { ILoginFormProps } from '@/components/molecules/types'
import { Button, Input } from '@/components/atoms'

const LoginForm: React.FC<ILoginFormProps> = ({
  authenticationError,
  onSubmit
}): JSX.Element => {
  // -------------- REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  return (
    <Box
      as="form"
      data-testid={`login-form`}
      id={'login-form'}
      width={350}
      height={'fit-content'}
      onSubmit={handleSubmit(onSubmit)}
      backgroundColor={'gray.100'}
      rounded={'xl'}
      padding={5}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'items-center'}
      alignItems={'center'}
      gap={5}
      boxShadow={'lg'}
    >
      {/* INPUT NAME */}
      <Input
        isRequired
        label="Enter your username"
        errorText={errors.username?.message}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Email"
        dataTestId="user-name"
        inputId="user-name"
        register={register('username')}
      />
      {/* INPUT PASSWORD */}
      <Input
        isRequired
        label="Enter your password"
        errorText={errors.password?.message}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Password"
        dataTestId="user-password"
        inputId="user-password"
        type="password"
        register={register('password')}
      />
      <Button
        size="md"
        buttonText="Login"
        variant="solid"
        disabled={false}
        loading={isSubmitting}
        spinnerPlacement="start"
        rounded="lg"
        onClick={() => console.log('Create Invoice')}
        formId="login-form"
        type="submit"
        textColor="gray.100"
        backgroundColor="black"
        buttonId="create-invoice-button"
        dataTestId="create-invoice-button"
        padding="0.5rem 1rem"
        fontWeight="bold"
      />
    </Box>
  )
}

export default LoginForm
