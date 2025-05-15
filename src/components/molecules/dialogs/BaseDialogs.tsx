import { Dialog } from '@chakra-ui/react'
import React, { JSX, useState } from 'react'
import { Button, Typography } from '@/components/atoms'

// ------------ INTERFACES

interface IBaseDialogsProps {
  placement?: 'top' | 'bottom' | 'center'
  motionPreset?:
    | 'slide-in-bottom'
    | 'slide-in-top'
    | 'scale'
    | 'slide-in-left'
    | 'slide-in-right'
    | 'none'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  hasModalBackdrop?: boolean
  isModalOpen?: boolean
  dialogId?: string
  /* BUTTONS */
  hasCloseButton?: boolean
  hasDismissButton?: boolean
  hasConfirmButton?: boolean
  confirmButtonText?: string
  dismissButtonText?: string
  onConfirmButtonClick?: () => void
  onDismissButtonClick?: () => void
  content?: JSX.Element | string
}

const BaseDialogs: React.FC<IBaseDialogsProps> = ({
  placement = 'center',
  title = 'Dialog Title',
  hasModalBackdrop = true,
  hasCloseButton = true,
  content = 'Dialog Content',
  dialogId = 'base-dialog',
  motionPreset = 'slide-in-bottom',
  hasDismissButton = true,
  isModalOpen = true,
  hasConfirmButton = true,
  confirmButtonText = 'Confirm',
  dismissButtonText = 'Dismiss',
  onConfirmButtonClick,
  onDismissButtonClick,
  size = 'md'
}): JSX.Element => {
  // ------------ HANDLERS
  const handleConfirmButtonClick = () => {
    // Invoke the onConfirmButtonClick callback if provided
    if (onConfirmButtonClick) onConfirmButtonClick()
  }

  const handleDismissButtonClick = () => {
    // Invoke the onDismissButtonClick callback if provided
    if (onDismissButtonClick) onDismissButtonClick()
  }

  return (
    <Dialog.Root
      id={`${dialogId}-dialog`}
      data-testid={`${dialogId}-dialog`}
      open={isModalOpen}
      size={size}
      placement={placement}
      motionPreset={motionPreset}
    >
      {/* BACKDROP FILTER */}
      {hasModalBackdrop && <Dialog.Backdrop />}
      <Dialog.Positioner>
        <Dialog.Content>
          {hasCloseButton && <Dialog.CloseTrigger />}
          {/* DIALOG HEADER */}
          <Dialog.Header
            id={`${dialogId}-header`}
            data-testid={`${dialogId}-header`}
          >
            <Typography
              textId={`${dialogId}-title`}
              dataTestId={`${dialogId}-title`}
              weight="bold"
              tagAs="h3"
              textLineHeight="shorter"
              uppercase={false}
              className="text-left"
              text={title}
              textStyle="2xl"
            />
          </Dialog.Header>
          {/* DIALOG CONTENT */}
          <Dialog.Body id={`${dialogId}-body`} data-testid={`${dialogId}-body`}>
            {content}
          </Dialog.Body>
          {/* DIALOG FOOTER */}
          <Dialog.Footer
            id={`${dialogId}-footer`}
            data-testid={`${dialogId}-footer`}
          >
            {hasConfirmButton && (
              <Button
                size="md"
                colorPalette="teal"
                buttonText={confirmButtonText}
                variant="solid"
                disabled={false}
                spinnerPlacement="start"
                rounded="lg"
                onClick={handleConfirmButtonClick}
                type="button"
                buttonId={`${dialogId}-confirm-button`}
                dataTestId={`${dialogId}-confirm-button`}
                padding="0.5rem 1rem"
                fontWeight="bold"
                width="8rem"
              />
            )}
            {hasDismissButton && (
              <Button
                size="md"
                backgroundColor={{
                  light: 'gray.300',
                  dark: 'black.50'
                }}
                buttonText={dismissButtonText}
                variant="solid"
                disabled={false}
                spinnerPlacement="start"
                rounded="lg"
                onClick={handleDismissButtonClick}
                type="button"
                buttonId={`${dialogId}-dismiss-button`}
                dataTestId={`${dialogId}-dismiss-button`}
                padding="0.5rem 1rem"
                fontWeight="bold"
                width="8rem"
              />
            )}
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default BaseDialogs
