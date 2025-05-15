import { Button, Typography } from '@/components/atoms'
import { Dialog } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { IBaseDialogsProps } from '@/components/molecules/types'

/**
 * @description A reusable base dialog component that provides a customizable modal dialog interface.
 * This component supports various configurations such as title, content, buttons, and animations.
 * @param {string} placement- The placement of the dialog on the screen.
 * @param {string} title - The title displayed in the dialog header.
 * @param {boolean} hasModalBackdrop - Whether the dialog has a modal backdrop.
 * @param {boolean} hasCloseButton - Whether the dialog includes a close button.
 * @param {React.ReactNode} content - The content displayed in the dialog body.
 * @param {string} dialogId - The unique identifier for the dialog.
 * @param {string} motionPreset - The animation preset for the dialog.
 * @param {boolean} hasDismissButton - Whether the dialog includes a dismiss button.
 * @param {boolean} isModalOpen - Whether the dialog is open or closed.
 * @param {boolean} hasConfirmButton - Whether the dialog includes a confirm button.
 * @param {string} confirmButtonText - The text displayed on the confirm button.
 * @param {string} dismissButtonText - The text displayed on the dismiss button.
 * @param {() => void} onConfirmButtonClick - Callback function invoked when the confirm button is clicked.
 * @param {() => void} onDismissButtonClick - Callback function invoked when the dismiss button is clicked.
 * @param {string} size - The size of the dialog.
 * @returns {JSX.Element} The rendered dialog component.
 */
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
