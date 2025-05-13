import React, { JSX } from 'react'
import { Flex } from '@chakra-ui/react'
import { IFlexContainerProps } from '@/components/atoms/types'

/**
 * @description A flexible container component that uses Chakra UI's Flex component.
 * It allows for customizable layout properties such as direction, justification,
 * alignment, wrapping, and gap between child elements.
 * @param {React.ReactNode} children - The content to be displayed within the Flex container.
 * @param {TFlexContainerDirections} direction - The direction in which the child elements are laid out.
 * @param {TFlexContainerJustify} justify - The justification of the child elements along the main axis.
 * @param {TFlexContainerAlign} align - The alignment of the child elements along the cross axis.
 * @param {TFlexContainerWrap} wrap - The wrapping behavior of the child elements.
 * @param {number} gap - The gap between child elements, specified in pixels.
 *  @param {string} className - Additional CSS classes to apply to the Flex container.
 * @param {React.CSSProperties} style - Additional inline styles to apply to the Flex container.
 * @param {string} flexContainerId - The ID to be assigned to the Flex container.
 * @param {TFlexContainerTag} as - The HTML tag to be used for the Flex container.
 * @param {string} dataTestId - The data-testid attribute for testing purposes.
 * @returns {JSX.Element} The rendered Flex container component.
 */
const FlexContainer: React.FC<IFlexContainerProps> = ({
  children,
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
  gap = 2,
  className = '',
  style = {},
  flexContainerId = `flex`,
  as = 'div',
  dataTestId,
  backgroundColor,
  padding = 0,
  margin = 0
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
      gap={`${gap}`}
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
    >
      {children}
    </Flex>
  )
}

export default FlexContainer
