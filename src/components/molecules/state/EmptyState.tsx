import { EmptyState as ChakraEmptyState, VStack } from '@chakra-ui/react'
import { JSX } from 'react'
import { IGenericEmptyStateProps } from '@/components/molecules/types'
import { Typography } from '@/components/atoms'

/**
 * @description - EmptyState component created using Chakra UI for displaying an empty state in the application.
 * @param {string} title - The title of the empty state.
 * @param {string} description - The description of the empty state.
 * @param {React.ReactNode} icon - The icon to display in the empty state.
 * @param {React.ReactNode} goBackButton - The button to go back to the previous state.
 * @param {IGenericStyleProperties} styleProperties - The style properties for the empty state.
 * @param {string} dataTestId - The data-testid attribute for testing purposes.
 * @param {string} emptyStateId - The ID of the empty state element.
 * @returns {JSX.Element} - The rendered EmptyState component.
 */
const EmptyState: React.FC<IGenericEmptyStateProps> = ({
  title = 'No Data Available',
  description = 'There is no data to display at this time.',
  icon = null,
  goBackButton = null,
  styleProperties = {
    width: ['45%', '45%', '45%', '60%'],
    height: 'fit-content',
    backgroundColor: { light: 'gray.100', dark: 'gray.600' },
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
  emptyStateId = 'empty-state'
}): JSX.Element => {
  return (
    <ChakraEmptyState.Root
      data-testid={`${dataTestId}-state-wrapper`}
      id={`${emptyStateId}-state-wrapper`}
      backgroundColor={{
        base: styleProperties.backgroundColor?.light,
        _dark: styleProperties.backgroundColor?.dark
      }}
      width={styleProperties.width}
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
          <ChakraEmptyState.Indicator data-testid={`${dataTestId}-state-icon`}>
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
              weight="regular"
              tagAs="p"
              textLineHeight="shorter"
              uppercase={false}
              className="text-center"
              text={description}
              textStyle="sm"
            />
          ) : null}
          {goBackButton ? goBackButton : null}
        </VStack>
      </ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  )
}

export default EmptyState
