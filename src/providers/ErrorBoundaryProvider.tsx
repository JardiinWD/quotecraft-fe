import { NotFoundState } from '@/components/molecules'
import { JSX } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

// -------------- INTERFACES
interface IErrorBoundaryProviderProps {
  children: React.ReactNode
  customFallback?: JSX.Element
}

/**
 * @description ErrorBoundaryProvider wraps its children with an error boundary to catch and handle errors.
 * @param {IErrorBoundaryProviderProps} children - Represents the content to be rendered within the error boundary.
 */
export const ErrorBoundaryProvider = ({
  children,
  customFallback = <NotFoundState />
}: IErrorBoundaryProviderProps) => {
  return (
    <ReactErrorBoundary fallback={customFallback} onError={logError}>
      {children}
    </ReactErrorBoundary>
  )
}

/**
 * @description logError is a function that logs the error and error information to the console.
 * @param {Error} error - Represents the error that occurred.
 * @param {React.ErrorInfo} info - Represents additional information about the error.
 */
function logError(error: Error, info: React.ErrorInfo) {
  console.log(`Something Went Wrong! --> ${error.message}`)
  console.log(`For proper information about the error --> ${info}`)
}
