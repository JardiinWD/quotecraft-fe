import React, { type JSX } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import type { IButtonProps } from '@/components/atoms/types'

/**
 * @description Button component that renders a Chakra UI button with customizable properties.
 * @param {TButtonSize} size - The size of the button. Can be 'sm', 'md', or 'lg'.
 * @param {string} buttonText - The text to display on the button.
 * @param {TButtonVariant} variant - The variant of the button. Can be 'solid', 'outline', or 'ghost'.
 * @param {TCustomColorPalette} colorPalette - The color palette for the button. Default is 'gray'.
 * @param {JSX.Element} icon - An optional icon to display on the button.
 * @param {boolean} disabled - Whether the button is disabled. Default is false.
 * @param {boolean} loading - Whether to show a loading spinner on the button. Default is false.
 * @param {string} loadingText - The text to display while loading.
 * @param {string} spinnerPlacement - The placement of the spinner. Can be 'start' or 'end'.
 * @param {TCustomRounded} rounded - The border radius of the button. Default is 'sm'.
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {string} formId - The ID of the form to submit when the button is clicked.
 * @param {string} type - The type of the button. Default is 'button'.
 * @param {string} buttonId - The ID of the button element.
 * @param {string} dataTestId - The data-testid attribute for testing purposes.
 * @param {string} backgroundColor - The background color of the button. Default is 'gray.100'.
 * @param {string} textColor - The text color of the button. Default is 'black.500'.
 * @param {string} padding - The padding of the button. Default is '0.5rem 1rem'.
 * @param {string} className - Additional class names for the button.
 * @param {string} fontSize - The font size of the button text. Default is 'sm'.
 * @param {string} fontWeight - The font weight of the button text. Default is 'normal'.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<IButtonProps> = ({
  size = 'md',
  buttonText,
  variant = 'solid',
  colorPalette = 'gray',
  icon,
  disabled = false,
  loading = false,
  loadingText,
  spinnerPlacement = 'start',
  rounded = 'sm',
  onClick,
  formId = `custom-form`,
  type = 'button',
  buttonId,
  dataTestId,
  backgroundColor = 'gray.100',
  textColor = 'black.500',
  padding = '0.5rem 1rem',
  className = '',
  fontSize = 'sm',
  fontWeight = 'normal',
  width = 'full'
}): JSX.Element => {
  return (
    <ChakraButton
      backgroundColor={backgroundColor}
      padding={padding}
      color={textColor}
      type={type}
      id={buttonId}
      rounded={rounded}
      loading={loading}
      loadingText={loadingText}
      spinnerPlacement={spinnerPlacement}
      colorPalette={colorPalette}
      disabled={disabled}
      data-testid={dataTestId}
      size={size}
      variant={variant}
      onClick={onClick}
      formTarget={formId}
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
    >
      {icon && icon}
      {buttonText}
    </ChakraButton>
  )
}

export default Button
