import { EmptyInvoiceState, NotFoundState } from '@/components/molecules'
import { Box } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Images } from '@/assets/images'
import { Image } from '@/components/atoms'
import { BaseTable } from '@/components/ui'

const Invoices: React.FC = (): JSX.Element => {
  // -------------- LOADER DATA
  const { data, error, status } = useLoaderData()

  return (
    <Box
      fontFamily="inter"
      fontSize="2xl"
      fontWeight="bold"
      lineHeight="shorter"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      {!data && data.length <= 0 && status === 'success' && (
        <EmptyInvoiceState
          onActionButtonClick={() =>
            alert('Funzionalità ancora non disponibile')
          }
        />
      )}
      {data && data.length > 0 && status === 'success' && (
        <BaseTable
          tableData={data.slice(0, 5)}
          variant="outline"
          columnHeaders={['name', 'email', 'updatedAt', 'createdAt']}
          columnHeadersToOmit={['id', 'avatar']}
        />
      )}
      {status === 'error' && (
        <NotFoundState
          styleProperties={{
            width: ['100%', '100%', '100%', '65%'],
            minWidth: ['100%', '100%', '100%', '65%']
          }}
          errorTitle="Unable to Retrieve Invoices"
          message="We were unable to fetch your invoice data from our database. Please try again later or contact support if the issue persists."
          devMessage={error}
          buttonText="Try Again"
          customIcon={
            <Image
              src={Images.Error500}
              alt="503 Error"
              dataTestId="error-500-image"
              htmlWidth={200}
              htmlHeight={200}
            />
          }
        />
      )}
    </Box>
  )
}

export default Invoices
