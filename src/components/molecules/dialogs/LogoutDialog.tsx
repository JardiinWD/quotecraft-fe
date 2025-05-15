import { Typography } from '@/components/atoms'
import { BaseDialogs } from '@/components/molecules'
import { ILogoutDialogProps } from '@/components/molecules/types'
import React, { JSX } from 'react'

/**
 * @description A reusable logout dialog component that provides a customizable modal dialog interface.
 * This component supports various configurations such as title, content, buttons, and animations.
 * @param {boolean} isModalOpen - Whether the dialog is open or closed.
 * @param {() => void} onConfirmButtonClick - Callback function invoked when the confirm button is clicked.
 * @param {() => void} onDismissButtonClick - Callback function invoked when the dismiss button is clicked.
 * @param {string} size - The size of the dialog.
 * @returns {JSX.Element} The rendered dialog component.
 */
const LogoutDialog: React.FC<ILogoutDialogProps> = ({
  isModalOpen,
  onConfirmButtonClick,
  onDismissButtonClick
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
    <BaseDialogs
      isModalOpen={isModalOpen}
      title="Sei sicuro di voler uscire?"
      content={
        <Typography
          textId={`logout-dialog-content`}
          dataTestId={`logout-dialog-content`}
          weight="regular"
          tagAs="p"
          textLineHeight="shorter"
          uppercase={false}
          className="text-left"
          text="Tutti i contenuti modificati e non salvati verranno persi. L'azione é irreversibile."
          textStyle="sm"
        />
      }
      dismissButtonText="Annulla"
      confirmButtonText="Conferma"
      hasConfirmButton={true}
      hasDismissButton={true}
      onDismissButtonClick={handleDismissButtonClick}
      onConfirmButtonClick={handleConfirmButtonClick}
      dialogId="logout-dialog"
      hasModalBackdrop={true}
      hasCloseButton={true}
    />
  )
}

export default LogoutDialog
