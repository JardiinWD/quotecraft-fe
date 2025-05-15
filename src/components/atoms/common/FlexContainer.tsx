import React, { JSX } from 'react'
import { Flex } from '@chakra-ui/react'
import { IFlexContainerProps } from '@/components/atoms/types'

/**
 * @description A flexible container component that uses Chakra UI's Flex component.
 * It allows for customizable layout properties such as direction, justification,
 * alignment, wrapping, and gap between child elements.
 * @param {React.ReactNode} children - The content to be displayed within the Flex container.
 * @param {TGenericContainerDirections} direction - The direction in which the child elements are laid out.
 * @param {TGenericContainerJustify} justify - The justification of the child elements along the main axis.
 * @param {TGenericContainerAlign} align - The alignment of the child elements along the cross axis.
 * @param {TGenericContainerWrap} wrap - The wrapping behavior of the child elements.
 * @param {number} gap - The gap between child elements, specified in pixels.
 *  @param {string} className - Additional CSS classes to apply to the Flex container.
 * @param {React.CSSProperties} style - Additional inline styles to apply to the Flex container.
 * @param {string} flexContainerId - The ID to be assigned to the Flex container.
 * @param {TGenericContainerTag} as - The HTML tag to be used for the Flex container.
 * @param {string} dataTestId - The data-testid attribute for testing purposes.
 * @param {TDarkmodeColorReady} backgroundColor - The background color for the Flex container.
 * @param {string | number} padding - The padding to be applied to the Flex container.
 * @param {string | number} margin - The margin to be applied to the Flex container.
 * @param {IGenericStyleProperties} additionalStyleProperties - Additional style properties to be applied.
 * @returns {JSX.Element} The rendered Flex container component.
 */
const FlexContainer: React.FC<IFlexContainerProps> = ({
  children,
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
  className = '',
  style = {},
  flexContainerId = `flex`,
  as = 'div',
  dataTestId,
  backgroundColor = {
    light: 'gray.100',
    dark: 'gray.600'
  },
  additionalStyleProperties = {
    padding: 0,
    margin: 0,
    gap: 2,
    height: 'fit-content',
    width: 'fit-content'
  }
}): JSX.Element => {
  return (
    <Flex
      data-testid={dataTestId}
      as={as}
      id={`${flexContainerId}-container`}
      className={className}
      style={style}
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={additionalStyleProperties.gap}
      backgroundColor={{
        base: backgroundColor?.light,
        _dark: backgroundColor?.dark
      }}
      padding={additionalStyleProperties.padding}
      margin={additionalStyleProperties.margin}
    >
      {children}
    </Flex>
  )
}

export default FlexContainer
