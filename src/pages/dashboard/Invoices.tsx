import { Box } from '@chakra-ui/react'
import React, { type JSX } from 'react'

const Invoices: React.FC = (): JSX.Element => {
  return (
    <Box
      color="red.300"
      fontFamily="inter"
      fontSize="2xl"
      fontWeight="bold"
      lineHeight="shorter"
    >
      Invoices Page
    </Box>
  )
}

export default Invoices
