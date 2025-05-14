import React, { JSX } from 'react'
import { Box, HStack, Separator } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  loginSchema,
  type TLoginFormValues
} from '@/components/molecules/forms/schema'
import { ILoginFormProps } from '@/components/molecules/types'
import { Button, FlexContainer, Input, Typography } from '@/components/atoms'

/**
 * @description LoginForm component
 * @param {string} authenticationError - Optional error message for authentication
 * @param {function} onSubmit - Function to handle form submission
 * @param {object} translations - Optional translations object
 */
const LoginForm: React.FC<ILoginFormProps> = ({
  authenticationError,
  onSubmit,
  translations
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
      width={['45%', '45%', '45%', '60%']}
      height={'fit-content'}
      onSubmit={handleSubmit(onSubmit)}
      backgroundColor={{ _light: 'gray.100', _dark: 'gray.700' }}
      rounded={'xl'}
      padding={5}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'items-start'}
      gap={5}
      boxShadow={'lg'}
    >
      {/* HEADING */}
      <FlexContainer
        dataTestId="signin-form-info-labels"
        flexContainerId="signin-form-info-labels"
        direction="column"
        justify="center"
        align="flex-start"
      >
        <Typography
          textId="signin-form-heading"
          dataTestId="signin-form-heading"
          weight="bold"
          tagAs="h3"
          textLineHeight="shorter"
          uppercase={false}
          className="text-left"
          text={translations?.['signin-form-heading'] as string}
          textStyle="2xl"
        />
        <Typography
          textId="signin-form-text"
          dataTestId="signin-form-text"
          weight="regular"
          tagAs="p"
          textLineHeight="shorter"
          uppercase={false}
          className="text-left"
          text={translations?.['signin-form-text'] as string}
          textStyle="sm"
        />
      </FlexContainer>
      {/* SIGNIN WITH GOOGLE */}
      <Button
        size="md"
        buttonText={translations?.['signin-with-google-button'] as string}
        variant="solid"
        disabled={false}
        rounded="lg"
        onClick={() => console.log('Signin with Google')}
        formId="login-form"
        type="submit"
        buttonId="signin-with-google-button"
        dataTestId="signin-with-google-button"
        padding="0.5rem 1rem"
        fontWeight="bold"
        width={'auto'}
        backgroundColor="gray.200"
        textColor={{
          light: 'black.50',
          dark: 'gray.800'
        }}
      />
      {/* SEPARATOR */}
      <HStack>
        <Separator height={0.5} backgroundColor="gray.200" size="sm" flex="1" />
        <Typography
          weight="medium"
          tagAs="span"
          textLineHeight="shorter"
          uppercase={false}
          className="text-center"
          text="or"
          textStyle="sm"
        />
        <Separator height={0.5} backgroundColor="gray.200" size="sm" flex="1" />
      </HStack>
      {/* INPUT NAME */}
      <Input
        isRequired
        label="Username"
        errorText={
          errors.username?.message &&
          ((translations?.['input-user-name-error-text'] as string) ??
            errors.username?.message)
        }
        onChange={(e) => console.log(e.target.value)}
        placeholder="Username"
        dataTestId="user-name"
        inputId="user-name"
        register={register('username')}
      />
      {/* INPUT PASSWORD */}
      <Input
        isRequired
        label="Password"
        errorText={
          errors.password?.message &&
          ((translations?.['input-user-password-error-text'] as string) ??
            errors.password?.message)
        }
        onChange={(e) => console.log(e.target.value)}
        placeholder="Password"
        dataTestId="user-password"
        inputId="user-password"
        type="password"
        register={register('password')}
      />
      {/* LOGIN BUTTON */}
      <Button
        size="md"
        buttonText={translations?.['login-button'] as string}
        variant="solid"
        disabled={false}
        loading={isSubmitting}
        spinnerPlacement="start"
        rounded="lg"
        onClick={() => console.log('Create Invoice')}
        formId="login-form"
        type="submit"
        buttonId="login-button"
        dataTestId="login-button"
        padding="0.5rem 1rem"
        fontWeight="bold"
        width={'auto'}
      />
      {/* Typography */}
      {authenticationError && (
        <Typography
          textColor={{
            light: 'red.500',
            dark: 'red.500'
          }}
          textId="login-form-error"
          weight="medium"
          className="text-center"
          textLineHeight="shorter"
          uppercase={false}
          dataTestId="invoices"
          text={authenticationError}
        />
      )}
    </Box>
  )
}

export default LoginForm
