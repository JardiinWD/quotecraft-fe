import { EmptyInvoiceState, NotFoundState } from '@/components/molecules'
import { Box } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'

const Invoices: React.FC = (): JSX.Element => {
  // -------------- LOADER DATA
  const { data, error, status } = useLoaderData()

  return (
    <Box
      fontFamily="inter"
      fontSize="2xl"
      fontWeight="bold"
      lineHeight="shorter"
      alignItems={'center'}
      justifyContent={'center'}
      display={'flex'}
    >
      {!data && data.length <= 0 && status === 'success' && (
        <EmptyInvoiceState />
      )}
      {status === 'error' && (
        <NotFoundState
          styleProperties={{
            width: ['100%', '100%', '100%', '80%']
          }}
          errorTitle="Unable to Retrieve Invoices"
          message="We were unable to fetch your invoice data from our database. Please try again later or contact support if the issue persists."
          devMessage={error}
        />
      )}
    </Box>
  )
}

export default Invoices
