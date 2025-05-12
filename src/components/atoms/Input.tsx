import { Input as ChakraInput, Field } from '@chakra-ui/react'
import React, { type JSX } from 'react'
import type { IInputProps } from '@/components/atoms/types'

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
  variant = 'outline',
  size = 'md',
  isRequired = false,
  helperText,
  label,
  errorText,
  onChange,
  placeholder = 'Enter text',
  dataTestId = 'input-field',
  inputClassName = '',
  inputId = 'input-field',
  type = 'text'
}): JSX.Element => {
  return (
    <Field.Root invalid>
      {label && (
        /* LABEL */
        <Field.Label fontWeight={400} fontSize="sm" mb={1}>
          {label} {isRequired && <Field.RequiredIndicator />}
        </Field.Label>
      )}
      {/* INPUT */}
      <ChakraInput
        variant={variant}
        size={size}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={dataTestId}
        className={inputClassName}
        id={inputId}
        type={type}
      />
      {/* HELPER TEXT */}
      {helperText && !errorText && (
        <Field.HelperText fontWeight={400} fontSize="sm" mb={1}>
          {helperText}
        </Field.HelperText>
      )}
      {/* ERROR TEXT */}
      {errorText && (
        <Field.ErrorText fontWeight={400} fontSize="sm" mb={1}>
          {errorText}
        </Field.ErrorText>
      )}
    </Field.Root>
  )
}

export default Input
