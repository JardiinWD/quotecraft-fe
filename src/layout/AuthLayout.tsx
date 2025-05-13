import React, { JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Helmet, FlexContainer, Image } from '@/components/atoms'
import { retrieveHelmetData } from '@/functions/metadata'
import { Images } from '@/assets/images'

const AuthLayout: React.FC = (): JSX.Element => {
  // -------------- HOOKS
  const location = useLocation()

  // -------------- HELMET DATA
  const { title, description, keywords, route } = retrieveHelmetData(
    location.pathname,
    'auth'
  )

  console.log('====================================')
  console.log('AuthLayout -> helmet title', title)
  console.log('AuthLayout -> helmet description', description)
  console.log('AuthLayout -> helmet keywords', keywords)
  console.log('AuthLayout -> helmet title', title, description, keywords, route)
  console.log('====================================')

  // Check if the user has landed on the /dashboard route
  if (location.pathname === '/auth') return <Navigate to="/auth/login" />

  return (
    <div>
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
        backgroundColor="gray.100"
      >
        {/* LOGIN ILLUSTRATION CONTAINER */}
        <FlexContainer
          direction="row"
          justify="center"
          align="center"
          className="!hidden lg:w-[60%] lg:!flex h-full"
          flexContainerId={`${title}-auth-illustration`}
          dataTestId={`${title}-auth-illustration`}
        >
          <Image
            src={Images.LoginIllustration}
            alt="Authentication Illustration"
            htmlWidth={550}
            htmlHeight={550}
          />
        </FlexContainer>
        <FlexContainer
          direction="row"
          justify="center"
          align="center"
          className="!hidden lg:w-[40%] lg:!flex h-full"
          flexContainerId={`${title}-auth-form`}
          dataTestId={`${title}-auth-form`}
          backgroundColor="red.500"
        >
          <Outlet />
        </FlexContainer>
      </FlexContainer>
    </div>
  )
}

export default AuthLayout
