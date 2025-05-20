import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { NotFoundState } from '@/components/molecules'
import { Images } from '@/assets/images'
import { Image } from '@/components/atoms'

export const BaseError: React.FC = () => {
  const error = useRouteError()

  // Gestione specifica per errori 404
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <NotFoundState
        errorTitle="Pagina non trovata"
        message="La pagina che stai cercando non esiste o è stata spostata"
        devMessage={`Errore 404: ${error.statusText}`}
        buttonText="Torna alla home"
        redirectTo="/"
        customIcon={
          <Image
            src={Images.Error404}
            alt="404 Error"
            htmlWidth={200}
            htmlHeight={200}
          />
        }
      />
    )
  }

  // Gestione per altri errori
  return (
    <NotFoundState
      errorTitle="Ops! Qualcosa è andato storto"
      message="Si è verificato un errore inaspettato"
      devMessage={
        error instanceof Error
          ? error.message
          : isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : JSON.stringify(error)
      }
      buttonText="Riprova"
      redirectTo="."
    />
  )
}
