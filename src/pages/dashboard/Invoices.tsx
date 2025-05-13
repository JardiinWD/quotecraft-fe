import { Typography, Button, Input } from '@/components/atoms'
import { LoginForm } from '@/components/molecules'
import { Box } from '@chakra-ui/react'
import React, { type JSX } from 'react'

const Invoices: React.FC = (): JSX.Element => {
  return (
    <Box
      fontFamily="inter"
      fontSize="2xl"
      fontWeight="bold"
      lineHeight="shorter"
    >
      {/* Typography */}
      <Typography
        tagAs="h1"
        textColor="red.300"
        fontFamily="inter"
        textStyle="4xl"
        textId="invoices"
        weight="bold"
        textLineHeight="shorter"
        uppercase={false}
        dataTestId="invoices"
        text="Invoices"
      />
      <LoginForm formId="login-form" onSubmit={(e) => console.log(e)} />
    </Box>
  )
}

export default Invoices
