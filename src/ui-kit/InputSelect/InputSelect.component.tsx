/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { ReactNode } from 'react'
import { StyledLabel } from './InputSelect.styles'

interface InputSelectProps {
  labelId: string
  label: string
  selectId: string
  value: string | number
  onChange: (e: any) => void
  items: { itemValue: string | number; itemDisplayName: ReactNode }[]
  inputTestId: string
}

export const InputSelect = (props: InputSelectProps) => {
  const { labelId, label, selectId, value, onChange, items, inputTestId } =
    props

  if (items.length === 0) return null

  return (
    <FormControl fullWidth>
      <StyledLabel id={labelId}>{label}</StyledLabel>
      <Select
        inputProps={{ 'data-testId': inputTestId }}
        labelId={labelId}
        id={selectId}
        value={value}
        onChange={onChange}
      >
        {items.map(item => (
          <MenuItem key={item.itemValue} value={item.itemValue}>
            {item.itemDisplayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
