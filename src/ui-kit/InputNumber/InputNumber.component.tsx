/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
import {
  TextFieldProps as TextFieldPropsMui,
  InputAdornment,
} from '@material-ui/core'
import { StyledInput } from './InputNumber.styles'

type InputNumberProps =
  | TextFieldPropsMui & {
      endAdornment?: string
    }

export const InputNumber = (props: InputNumberProps) => {
  const { endAdornment, value } = props

  return (
    <StyledInput
      {...props}
      value={typeof value === 'number' ? value.toFixed(2) : value}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        endAdornment: endAdornment && (
          <InputAdornment position='end'>{endAdornment}</InputAdornment>
        ),
      }}
    />
  )
}
