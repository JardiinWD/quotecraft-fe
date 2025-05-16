import React, { JSX } from 'react'
import { For, Table } from '@chakra-ui/react'
import { Button, FlexContainer, Typography } from '@/components/atoms'
import { TInvoicesData } from '@/api/types'
import { truncateLongText } from '@/functions/common'
import { FaRegEye, FaRegEdit, FaTrash } from 'react-icons/fa'

interface IBaseTableProps {
  variant: 'line' | 'outline'
  tableSize?: 'sm' | 'md' | 'lg'
  columnHeaders: string[]
  columnHeadersToOmit?: string[]
  tableData: TInvoicesData | []
  tableId?: string
  /* ACTION BUTTON */
  hasEditButton?: boolean
  hasDeleteButton?: boolean
  hasShowButton?: boolean
  onEditButtonClick?: (id: string) => void
  onDeleteButtonClick?: (id: string) => void
  onShowButtonClick?: (id: string) => void
}

const BaseTable: React.FC<IBaseTableProps> = ({
  variant = 'outline',
  tableSize = 'lg',
  tableId = 'base-table',
  columnHeaders = ['name', 'email', 'actions', 'avatar'],
  columnHeadersToOmit = ['id', 'createdAt', 'updatedAt'],
  tableData = [],
  hasEditButton = true,
  hasDeleteButton = true,
  hasShowButton = true,
  onEditButtonClick = (id: string) => {
    alert(`Edit button clicked for ID: ${id}`)
  },
  onDeleteButtonClick = (id: string) => {
    alert(`Delete button clicked for ID: ${id}`)
  },
  onShowButtonClick = (id: string) => {
    alert(`Show button clicked for ID: ${id}`)
  }
}): JSX.Element => {
  // ------------- TABLE DATA MANIPULATION
  const filteredTableData = tableData.map((row) => {
    // Deep clone the row
    const clonedRow = { ...row }
    // Remove the keys to omit
    columnHeadersToOmit.forEach((key) => {
      delete clonedRow[key]
    })
    // Return the cloned row
    return clonedRow
  })

  console.log('Filtered Table Data:', filteredTableData)

  return (
    <Table.Root
      data-testid={`${tableId}-wrapper`}
      id={`${tableId}-wrapper`}
      key={variant}
      size={tableSize}
      variant={variant}
    >
      {/* HEADER */}
      <Table.Header>
        <Table.Row>
          {columnHeaders.map((header) => (
            <Table.ColumnHeader key={header}>
              <Typography
                textId={`${header}-row`}
                dataTestId={`${header}-row`}
                weight="regular"
                tagAs="p"
                textLineHeight="shorter"
                uppercase={false}
                className="text-center capitalize"
                text={header}
                textStyle="sm"
              />
            </Table.ColumnHeader>
          ))}
          {(hasEditButton || hasDeleteButton || hasShowButton) && (
            <Table.ColumnHeader textAlign="center">Actions</Table.ColumnHeader>
          )}
        </Table.Row>
      </Table.Header>
      {/* BODY */}
      <Table.Body>
        {filteredTableData.map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {columnHeaders.map((header) => (
              <Table.Cell key={header}>
                <Typography
                  textId={`${header}-cell-${rowIndex}`}
                  dataTestId={`${header}-cell-${rowIndex}`}
                  weight="light"
                  tagAs="p"
                  textLineHeight="shorter"
                  uppercase={false}
                  className="text-center"
                  text={truncateLongText(String(row[header]), 70)}
                  textStyle="sm"
                />
              </Table.Cell>
            ))}
            {(hasEditButton || hasDeleteButton || hasShowButton) && (
              <Table.Cell textAlign="center">
                <FlexContainer
                  align="center"
                  flexContainerId={`actions-cell-${rowIndex}`}
                  dataTestId={`actions-cell-${rowIndex}`}
                  as="div"
                  direction="row"
                  justify="center"
                  wrap="nowrap"
                  additionalStyleProperties={{
                    gap: 3,
                    margin: 1
                  }}
                  backgroundColor={{
                    light: 'gray.200',
                    dark: 'gray.600'
                  }}
                >
                  {hasShowButton && (
                    <Button
                      size="sm"
                      variant="solid"
                      disabled={false}
                      rounded="lg"
                      onClick={() => onShowButtonClick(rowIndex.toString())}
                      type="button"
                      buttonId={`${rowIndex}-show-button`}
                      dataTestId="signin-with-google-button"
                      padding="0.5rem 1rem"
                      fontWeight="bold"
                      width="auto"
                      backgroundColor={{
                        light: 'teal.500',
                        dark: 'teal.500'
                      }}
                      icon={<FaRegEye size={48} />}
                    />
                  )}
                  {hasEditButton && (
                    <Button
                      size="sm"
                      variant="solid"
                      disabled={false}
                      rounded="lg"
                      onClick={() => onEditButtonClick(rowIndex.toString())}
                      type="button"
                      buttonId={`${rowIndex}-edit-button`}
                      dataTestId="signin-with-google-button"
                      padding="0.5rem 1rem"
                      fontWeight="bold"
                      width="auto"
                      backgroundColor={{
                        light: 'yellow.500',
                        dark: 'yellow.500'
                      }}
                      colorPalette="yellow"
                      icon={<FaRegEdit size={48} />}
                    />
                  )}
                  {hasDeleteButton && (
                    <Button
                      size="sm"
                      variant="solid"
                      disabled={false}
                      rounded="lg"
                      onClick={() => onDeleteButtonClick(rowIndex.toString())}
                      type="button"
                      buttonId={`${rowIndex}-delete-button`}
                      dataTestId="signin-with-google-button"
                      padding="0.5rem 1rem"
                      fontWeight="bold"
                      width="auto"
                      backgroundColor={{
                        light: 'red.500',
                        dark: 'red.500'
                      }}
                      colorPalette="red"
                      icon={<FaTrash size={48} />}
                    />
                  )}
                </FlexContainer>
              </Table.Cell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export default BaseTable
