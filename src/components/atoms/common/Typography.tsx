import { Text } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { ITypographyProps } from '@/components/atoms/types'

/**
 * @description Renders a typography component with customizable variant, weight, alignment, and styling.
 * @param {string} weight - The weight of the text. Can be 'regular', 'medium', 'semibold', or 'bold'.
 * @param {string} className - Additional CSS class names for the component.
 * @param {string} htmlString - The HTML string to render. If provided, the component will render as a `TagName` with the HTML string.
 * @param {boolean} uppercase - Whether to render the text in uppercase.
 * @param {Object} style - Additional inline styles for the component.
 * @param {keyof Pick<JSX.IntrinsicElements, 'p' | 'span'>} tagAs - The HTML tag to render the component as.
 * @param {string} text - The text to render. If `htmlString` is provided, this prop is ignored.
 * @param {string} textLineHeight - The line height of the text.
 * @param {string} textColor - The color of the text.
 * @param {string} fontFamily - The font family of the text.
 * @param {string} textId - The ID of the text element.
 * @param {string} textStyle - The text style variant.
 * @return {JSX.Element} The rendered text component.
 */
const Typography: React.FC<ITypographyProps> = ({
  tagAs = 'p',
  textColor = 'black.50',
  fontFamily = 'inter',
  textId = '',
  weight = 'regular',
  text = '',
  textLineHeight = '',
  className = '',
  uppercase = false,
  htmlString = '',
  style = {},
  dataTestId = '',
  textStyle = 'sm',
  fontSize = 'sm'
}): JSX.Element => {
  return htmlString ? (
    <Text
      color={textColor}
      textStyle={textStyle}
      fontSize={fontSize}
      fontFamily={fontFamily}
      as={tagAs}
      style={style}
      lineHeight={textLineHeight}
      fontWeight={weight}
      className={`${uppercase && 'uppercase'} ${className}`}
      data-testid={dataTestId}
      id={textId}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  ) : (
    <Text
      color={textColor}
      textStyle={textStyle}
      fontFamily={fontFamily}
      as={tagAs}
      style={style}
      lineHeight={textLineHeight}
      fontWeight={weight}
      className={`${uppercase && 'uppercase'} ${className}`}
      data-testid={dataTestId}
      id={textId}
    >
      {text}
    </Text>
  )
}

export default Typography
