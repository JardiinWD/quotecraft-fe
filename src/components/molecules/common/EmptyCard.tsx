import { Button, FlexContainer, Typography } from '@/components/atoms'

import { IEmptyCardProps } from '@/components/molecules/types'
import React, { JSX } from 'react'

/**
 * @description EmptyCard component to display when the cart is empty or there was an error loading the cart.
 * @param {string} cardMessage - Message to display when the cart is empty
 * @param {string} cardError - Message to display when there was an error loading the cart
 */
const EmptyCard: React.FC<IEmptyCardProps> = ({
  cardMessage = 'Your cart is empty',
  cardError = 'There was an error loading your cart',
  buttonText = 'Start Shopping',
  onClickHandler = () => {},
  dataTestId = 'empty-cart-card'
}): JSX.Element => {
  return (
    <FlexContainer
      dataTestId={dataTestId}
      flexContainerId="cart-page"
      wrap="nowrap"
      direction="column"
      justify="center"
      align="center"
      gap={4}
      className="h-[15rem] w-full md:w-[30rem] lg:w-[30rem] self-center justify-self-center z-10 bg-white shadow-lg rounded-lg p-6"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)'
      }}
    >
      <Typography
        textId="empty-cart-message"
        dataTestId="empty-cart-message"
        weight="bold"
        tagAs="h3"
        textLineHeight="shorter"
        uppercase={false}
        className="text-center"
        text={cardMessage}
        textStyle="2xl"
      />
      {process.env.NODE_ENV === 'development' && (
        <Typography
          textId="empty-cart-error"
          dataTestId="empty-cart-error"
          weight="regular"
          tagAs="p"
          textLineHeight="shorter"
          textColor={{
            light: 'red.500',
            dark: 'red.500'
          }}
          uppercase={false}
          className="text-center"
          text={`DEV MESSAGE -> ${cardError}`}
          textStyle="sm"
        />
      )}
      {/* BUTTON */}
      <Button
        size="md"
        colorPalette="teal"
        buttonText={buttonText}
        variant="solid"
        disabled={false}
        spinnerPlacement="start"
        rounded="lg"
        type="button"
        buttonId={`empty-cart-button`}
        dataTestId={`empty-cart-button`}
        padding="0.5rem 1rem"
        fontWeight="bold"
        width="8rem"
      />
    </FlexContainer>
  )
}

export default EmptyCard
