import { Input as ChakraInput, Field } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { IInputProps } from '@/components/atoms/types'

/**
 * @description Custom Input component that wraps Chakra UI Field with additional functionality
 * @param {string} variant - Input style variant ('outline', 'filled', 'flushed', 'unstyled')
 * @param {string} size - Input size ('xs', 'sm', 'md', 'lg')
 * @param {boolean} isRequired - Whether the field is mandatory
 * @param {string} helperText - Supportive text displayed below the input
 * @param {string} label - Text displayed above the input
 * @param {string} errorText - Error message shown when input is invalid
 * @param {Function} onChange - Callback function triggered when input value changes
 * @param {string} placeholder - Text displayed when input is empty
 * @param {string} dataTestId - Data attribute for automated testing
 * @param {string} inputClassName - Additional CSS classes for the input
 * @param {string} inputId - HTML ID for the input element
 * @param {string} type - HTML input type (text, password, email, etc.)
 * @returns {JSX.Element} Input component with label, helper text and error message support
 */
const Input: React.FC<IInputProps> = ({
  variant = 'subtle',
  size = 'sm',
  isRequired,
  helperText,
  label,
  errorText,
  onChange,
  placeholder = 'Enter text',
  dataTestId = 'input-field',
  inputClassName = '',
  inputId = 'input-field',
  type = 'text',
  register
}): JSX.Element => {
  return (
    <Field.Root invalid>
      {label && (
        /* LABEL */
        <Field.Label
          data-testid={`input-${dataTestId}-label`}
          fontWeight={500}
          fontSize="sm"
        >
          {label} {isRequired && <Field.RequiredIndicator />}
        </Field.Label>
      )}
      {/* INPUT */}
      <ChakraInput
        variant={variant}
        size={size}
        fontSize={'md'}
        fontWeight={400}
        borderRadius={'md'}
        padding={2}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={dataTestId}
        className={inputClassName}
        backgroundColor={'white'}
        outlineColor={{
          base: 'green.500',
          _dark: 'green.500'
        }}
        id={`${inputId}-input`}
        type={type}
        {...register}
      />
      {/* HELPER TEXT */}
      {helperText && !errorText && (
        <Field.HelperText
          data-testid={`input-${dataTestId}-helper-text`}
          fontWeight={400}
          fontSize="2xs"
          fontStyle={'italic'}
        >
          {helperText}
        </Field.HelperText>
      )}
      {/* ERROR TEXT */}
      {errorText && (
        <Field.ErrorText
          data-testid={`input-${dataTestId}-error-text`}
          fontWeight={400}
          fontSize="2xs"
          fontStyle={'italic'}
          color="green.500"
        >
          {errorText}
        </Field.ErrorText>
      )}
    </Field.Root>
  )
}

export default Input
