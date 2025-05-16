import { FlexContainer, Typography } from '@/components/atoms'
import { NavItemProps } from '@/components/molecules/types'
import { Icon } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { Link } from 'react-router-dom'

/**
 * @description NavItem is a component that renders a navigation item in the sidebar.
 * @param { React.ElementType} icon - The icon to be displayed.
 * @param { string } navLinkText - The text to be displayed for the navigation link.
 * @param { string } navLinkContext - The context for the navigation link (optional).
 * @param { string } to - The URL to navigate to when the link is clicked.
 * @param { boolean } isActive - Indicates if the navigation item is active (optional).
 * @returns
 */
const NavItem: React.FC<NavItemProps> = ({
  icon,
  navLinkText,
  navLinkContext,
  to,
  isActive
}): JSX.Element => {
  return (
    <Link to={to as string} className="w-full decoration-0 shadow-none">
      <FlexContainer
        align="center"
        flexContainerId={`${navLinkContext}-nav-item`}
        dataTestId={`${navLinkContext}-nav-item`}
        as="div"
        direction="row"
        justify="flex-start"
        wrap="nowrap"
        additionalStyleProperties={{
          padding: 2,
          margin: 2
        }}
      >
        <Icon
          color={{
            base: isActive ? 'teal.500' : 'black.50',
            _dark: isActive ? 'teal.500' : 'gray.50'
          }}
          mr="3"
          fontSize="18"
          as={icon}
        />
        <Typography
          textColor={{
            light: isActive ? 'teal.500' : 'black.50',
            dark: isActive ? 'teal.500' : 'gray.50'
          }}
          textId={`${navLinkContext}-nav-item-text`}
          dataTestId={`${navLinkContext}-nav-item-text`}
          weight="medium"
          tagAs="span"
          textLineHeight="shorter"
          uppercase={false}
          className="text-left"
          text={navLinkText}
          textStyle="md"
        />
      </FlexContainer>
    </Link>
  )
}

export default NavItem
