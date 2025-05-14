import React, { JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Helmet, FlexContainer, Image } from '@/components/atoms'
import { retrieveHelmetData } from '@/functions/metadata'
import { Images } from '@/assets/images'
import { ColorModeButton } from '@/components/ui'

const AuthLayout: React.FC = (): JSX.Element => {
  // -------------- HOOKS
  const location = useLocation()

  // -------------- HELMET DATA
  const { title, description, keywords, route } = retrieveHelmetData(
    location.pathname,
    'auth'
  )

  // Check if the user has landed on the /dashboard route
  if (location.pathname === '/auth') return <Navigate to="/auth/login" />

  return (
    <React.Fragment>
      {/* METADATA */}
      <Helmet
        title={title}
        description={description}
        keywords={keywords}
        route={route}
      />
      {/* OTHER AUTH COMPONENTS */}
      <FlexContainer
        direction="row"
        justify="center"
        align="center"
        wrap="nowrap"
        className="w-screen h-screen"
        flexContainerId={`${title}-auth-page`}
        dataTestId={`${title}-auth-page`}
      >
        {/* AUTH LAYOUT ILLUSTRATION CONTAINER */}
        <FlexContainer
          direction="row"
          justify="center"
          align="center"
          className="!hidden lg:w-[50%] lg:!flex h-full"
          flexContainerId={`${title}-auth-illustration`}
          dataTestId={`${title}-auth-illustration`}
          backgroundColor={{
            light: 'gray.100',
            dark: 'gray.700'
          }}
        >
          <Image
            src={Images.LoginIllustration}
            alt="Authentication Illustration"
            htmlWidth={550}
            htmlHeight={550}
          />
        </FlexContainer>
        {/* AUTH LAYOUT OUTLET CONTAINER */}
        <FlexContainer
          direction="row"
          justify="center"
          align="center"
          className="w-[100%] lg:w-[50%] lg:!flex h-full relative"
          flexContainerId={`${title}-auth-form`}
          dataTestId={`${title}-auth-form`}
          backgroundColor={{
            light: 'teal.500',
            dark: 'teal.500'
          }}
        >
          <ColorModeButton />
          <Outlet />
        </FlexContainer>
      </FlexContainer>
    </React.Fragment>
  )
}

export default AuthLayout
