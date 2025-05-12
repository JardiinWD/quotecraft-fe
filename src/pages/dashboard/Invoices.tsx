import { Typography, Button } from '@/components'
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
      <Button
        size="md"
        buttonText="Create Invoice"
        variant="solid"
        colorPalette="red"
        disabled={false}
        loading={false}
        loadingText="Loading..."
        spinnerPlacement="start"
        rounded="lg"
        onClick={() => console.log('Create Invoice')}
        formId="create-invoice-form"
        type="button"
        textColor="teal.500"
        backgroundColor="red.100"
        buttonId="create-invoice-button"
        dataTestId="create-invoice-button"
      />
    </Box>
  )
}

export default Invoices
