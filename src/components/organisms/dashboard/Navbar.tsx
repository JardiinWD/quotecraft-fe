import React, { JSX } from 'react'
import { Box } from '@chakra-ui/react'
import { FlexContainer, UserPill } from '@/components/atoms'
import { IoIosNotifications } from 'react-icons/io'
import { ColorModeButton } from '@/components/ui'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Box
      as="nav"
      data-testid="quotecraft-sidebar"
      id="quotecraft-sidebar"
      pos="fixed"
      top="0"
      right="0"
      height="5rem"
      width={'calc(100vw - 12.5rem)'}
      backgroundColor={{ base: 'gray.100', _dark: 'gray.600' }}
      borderRight="1px"
      borderRightColor={{ base: 'gray.100', _dark: 'gray.600' }}
      boxShadow={{
        base: '0 0 10px rgba(0, 0, 0, 0.1)',
        _dark: ''
      }}
      transition="0.3s ease"
      zIndex="999"
      className="relative"
    >
      <FlexContainer
        direction="row"
        justify="flex-end"
        align="center"
        wrap="nowrap"
        additionalStyleProperties={{
          padding: 10,
          gap: 6,
          width: '100%',
          height: '100%'
        }}
        flexContainerId={`navbar-container`}
        dataTestId={`navbar-container`}
      >
        <ColorModeButton />
        <IoIosNotifications cursor={'pointer'} size={32} />
        <UserPill />
      </FlexContainer>
    </Box>
  )
}

export default Navbar
