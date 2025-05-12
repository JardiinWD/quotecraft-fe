import { Typography, Button, Input } from '@/components'
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
      {/* Button */}
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
        padding="0.5rem 1rem"
        className="create-invoice-button"
      />
      {/* Input */}
      <Input
        variant="subtle"
        size="sm"
        isRequired={false}
        helperText="Enter invoice number"
        label="Invoice Number"
        // errorText="Something went wrong"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter invoice number"
        dataTestId="invoice-number-input"
        inputClassName="invoice-number-input"
        inputId="invoice-number-input"
        type="text"
      />
    </Box>
  )
}

export default Invoices
