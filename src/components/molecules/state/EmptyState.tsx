import { EmptyState as ChakraEmptyState, VStack } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { IGenericEmptyStateProps } from '@/components/molecules/types'
import { Spinner, Typography } from '@/components/atoms'
import { useLoadingDelay } from '@/hooks'

/**
 * @description - EmptyState component created using Chakra UI for displaying an empty state in the application.
 * @param {string} title - The title of the empty state.
 * @param {string} description - The description of the empty state.
 * @param {React.ReactNode} icon - The icon to display in the empty state.
 * @param {React.ReactNode} goBackButton - The button to go back to the previous state.
 * @param {IGenericStyleProperties} styleProperties - The style properties for the empty state.
 * @param {string} dataTestId - The data-testid attribute for testing purposes.
 * @param {string} emptyStateId - The ID of the empty state element.
 * @param {string} devMessage - The developer message to display in development mode.
 * @param {React.ReactNode} actionButton - The action button to display in the empty state.
 * @param {() => void} onActionButtonClick - The function to call when the action button is clicked.
 * @returns {JSX.Element} - The rendered EmptyState component.
 */
const EmptyState: React.FC<IGenericEmptyStateProps> = ({
  title = 'No Data Available',
  description = 'There is no data to display at this time.',
  icon = null,
  goBackButton = null,
  actionButton = null,
  styleProperties = {
    width: ['45%', '45%', '45%', '60%'],
    minWidth: [],
    height: 'fit-content',
    backgroundColor: { light: 'gray.50', dark: 'gray.600' },
    borderRadius: 'md',
    display: 'flex',
    direction: 'column',
    justify: 'center',
    align: 'center',
    wrap: 'nowrap',
    as: 'div',
    boxShadow: 'lg',
    gap: 4,
    padding: 8
  },
  dataTestId = 'empty-state',
  emptyStateId = 'empty-state',
  devMessage
}): JSX.Element => {
  // -------------- CUSTOM HOOK
  const isLoading = useLoadingDelay(2000)

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner spinnerId={`${emptyStateId}-spinner`} />
      ) : (
        <ChakraEmptyState.Root
          data-testid={`${dataTestId}-state-wrapper`}
          id={`${emptyStateId}-state-wrapper`}
          backgroundColor={{
            base: styleProperties.backgroundColor?.light,
            _dark: styleProperties.backgroundColor?.dark
          }}
          width={styleProperties.width}
          minWidth={styleProperties.minWidth}
          height={styleProperties.height}
          rounded={styleProperties.borderRadius}
          padding={styleProperties.padding}
          gap={styleProperties.gap}
          display={styleProperties.display}
          flexDirection={styleProperties.direction}
          justifyContent={styleProperties.justify}
          alignItems={styleProperties.align}
          as={styleProperties.as}
          boxShadow={styleProperties.boxShadow}
        >
          <ChakraEmptyState.Content>
            {icon ? (
              <ChakraEmptyState.Indicator
                data-testid={`${dataTestId}-state-icon`}
              >
                {icon}
              </ChakraEmptyState.Indicator>
            ) : null}
            <VStack gap={styleProperties.gap} textAlign="center">
              {title ? (
                <Typography
                  textId={`${emptyStateId}-state-title`}
                  dataTestId={`${dataTestId}-state-title`}
                  weight="bold"
                  tagAs="h3"
                  textLineHeight="shorter"
                  uppercase={false}
                  className="text-center"
                  text={title}
                  textStyle="2xl"
                />
              ) : null}
              {description ? (
                <Typography
                  textId={`${emptyStateId}-state-description`}
                  dataTestId={`${dataTestId}-state-description`}
                  weight="light"
                  tagAs="p"
                  textLineHeight="shorter"
                  uppercase={false}
                  className="text-center"
                  text={description}
                  textStyle="sm"
                />
              ) : null}
              {goBackButton ? goBackButton : null}
              {actionButton ? actionButton : null}
              {devMessage && process.env.NODE_ENV === 'development' ? (
                <Typography
                  textId={`${emptyStateId}-state-dev-message`}
                  dataTestId={`${dataTestId}-state-dev-message`}
                  weight="bold"
                  tagAs="p"
                  textLineHeight="shorter"
                  uppercase={false}
                  className="text-center"
                  text={`Dev Message --> ${devMessage}`}
                  textStyle="sm"
                  textColor={{
                    light: 'red.500',
                    dark: 'red.300'
                  }}
                />
              ) : null}
            </VStack>
          </ChakraEmptyState.Content>
        </ChakraEmptyState.Root>
      )}
    </React.Fragment>
  )
}

export default EmptyState
