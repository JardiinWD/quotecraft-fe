import { Input as ChakraInput, Field } from '@chakra-ui/react'
import React, { JSX, useState } from 'react'
import { IInputProps, TFormInputType } from '@/components/atoms/types'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

interface IState {
  inputType: TFormInputType
}

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
  register,
  additionalStyleProperties = {
    outlineColor: {
      base: 'teal.500',
      _dark: 'teal.500'
    },
    textColor: {
      base: 'gray.500',
      _dark: 'gray.100'
    },
    backgroundColor: {
      base: 'gray.100',
      _dark: 'gray.500'
    },
    borderColor: {
      base: 'gray.400',
      _dark: 'gray.500'
    },
    focusBorderColor: {
      base: 'teal.500',
      _dark: 'teal.500'
    },
    borderWidth: 1.2
  }
}): JSX.Element => {
  // ------------- STATE
  const [state, setState] = useState<IState>({
    inputType: type
  })

  // ------------- HANDLERS
  const handleInputType = () => {
    setState((prevState) => ({
      ...prevState,
      inputType: prevState.inputType === 'password' ? 'text' : 'password'
    }))
  }

  return (
    <Field.Root className="relative" invalid>
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
        outlineColor={additionalStyleProperties.outlineColor}
        color={additionalStyleProperties.textColor}
        backgroundColor={additionalStyleProperties.backgroundColor}
        borderColor={additionalStyleProperties.borderColor}
        borderWidth={additionalStyleProperties.borderWidth}
        focusBorderColor={additionalStyleProperties.focusBorderColor}
        _placeholder={{
          color: 'gray.400'
        }}
        id={`${inputId}-input`}
        type={state.inputType}
        {...register}
      />
      {type === 'password' &&
        (state.inputType === 'password' ? (
          <FaRegEye
            onClick={handleInputType}
            className="absolute right-2 top-9"
            color={'#3f3f46'}
          />
        ) : (
          <FaRegEyeSlash
            onClick={handleInputType}
            className="absolute right-2 top-9"
            color={'#3f3f46'}
          />
        ))}
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
          fontSize="xs"
          fontStyle="italic"
          color="red.500"
        >
          {errorText}
        </Field.ErrorText>
      )}
    </Field.Root>
  )
}

export default Input
