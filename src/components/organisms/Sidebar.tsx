import { Images } from '@/assets/images'
import { Button, FlexContainer, Image, Typography } from '@/components/atoms'
import { BaseDialogs, NavItem } from '@/components/molecules'
import { Box, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { FiHome, FiSettings } from 'react-icons/fi'
import { IoAnalytics } from 'react-icons/io5'
import { SiTableau } from 'react-icons/si'
import { useLocation, useNavigate } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
import { useAuthStore } from '@/stores'

// ------------ INTERFACES
interface ISidebarState {
  isModalOpen: boolean
}

const Sidebar: React.FC = () => {
  // ------------ CUSTOM HOOKS
  const location = useLocation()
  const navigate = useNavigate()

  // ------------ STATE
  const [state, setState] = useState<ISidebarState>({
    isModalOpen: false
  })

  // ------------ ZUSTAND STORE
  const { clearUserData } = useAuthStore()

  // ------------ HANDLERS
  const handleLogout = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen
    }))
  }

  const handleConfirmButtonClick = () => {
    // Clear user data
    clearUserData()
    // Redirect to login page
    navigate('/auth/login', { replace: true })
    // Close the modal
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false
    }))
  }

  const handleModalClose = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false
    }))
  }

  // ------------ NAVIGATION ITEMS
  const navItems = [
    { name: 'Home', icon: FiHome, path: '/dashboard/invoices' },
    { name: 'Analytics', icon: IoAnalytics, path: '/dashboard/analytics' },
    { name: 'Parameters', icon: SiTableau, path: '/dashboard/parameters' },
    { name: 'Customers', icon: FaUsers, path: '/dashboard/customers' },
    { name: 'Settings', icon: FiSettings, path: '/dashboard/settings' }
  ]

  return (
    <React.Fragment>
      <Box
        as="nav"
        data-testid="quotecraft-sidebar"
        id="quotecraft-sidebar"
        pos="fixed"
        top="0"
        left="0"
        h="100vh"
        w="200px"
        backgroundColor={{ base: 'gray.100', _dark: 'black.50' }}
        borderRight="1px"
        borderRightColor={{ base: 'gray.100', _dark: 'gray.700' }}
        transition="0.3s ease"
        zIndex="1000"
        className="relative"
      >
        {/* Logo */}
        <FlexContainer
          align="center"
          flexContainerId={`sidebar-logo`}
          dataTestId={`sidebar-logo`}
          as="div"
          direction="row"
          justify="center"
          wrap="nowrap"
          additionalStyleProperties={{
            padding: 3,
            margin: 3
          }}
        >
          <Image
            src={Images.Logo}
            alt="QuoteCraft Logo"
            htmlWidth={70}
            htmlHeight={70}
          />
        </FlexContainer>
        {/* Menu Items */}
        <VStack align="stretch" mt={4}>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              to={item.path}
              isActive={location.pathname === item.path}
              navLinkText={item.name}
              navLinkContext={item.name.toLowerCase()}
            />
          ))}
        </VStack>
        <Box
          as="nav"
          data-testid="quotecraft-logout-button-wrapper"
          id="quotecraft-logout-button-wrapper"
          pos="absolute"
          bottom="0"
          left="0"
          h="fit-content"
          w="100%"
          padding={4}
          backgroundColor={{ base: 'gray.100', _dark: 'black.50' }}
          borderRight="1px"
          borderRightColor={{ base: 'gray.100', _dark: 'gray.700' }}
          transition="0.3s ease"
          zIndex="1000"
          className="relative"
        >
          <Button
            size="md"
            icon={<CiLogout />}
            buttonText={'Logout'}
            variant="surface"
            disabled={false}
            spinnerPlacement="start"
            rounded="lg"
            onClick={handleLogout}
            type="button"
            buttonId="logout-button"
            dataTestId="logout-button"
            padding="0.5rem 1rem"
            fontWeight="bold"
            width="100%"
          />
        </Box>
      </Box>
      {/* BASE DIALOGS */}
      {state.isModalOpen && (
        <BaseDialogs
          isModalOpen={state.isModalOpen}
          title="Sei sicuro di voler uscire?"
          content={
            <Typography
              textId={`logout-dialog-content`}
              dataTestId={`logout-dialog-content`}
              weight="regular"
              tagAs="p"
              textLineHeight="shorter"
              uppercase={false}
              className="text-left"
              text="Tutti i contenuti modificati e non salvati verranno persi. L'azione é irreversibile."
              textStyle="sm"
            />
          }
          dismissButtonText="Annulla"
          confirmButtonText="Conferma"
          hasConfirmButton={true}
          hasDismissButton={true}
          onDismissButtonClick={handleModalClose}
          onConfirmButtonClick={handleConfirmButtonClick}
          dialogId="logout-dialog"
          hasModalBackdrop={true}
          hasCloseButton={true}
        />
      )}
    </React.Fragment>
  )
}

export default Sidebar
