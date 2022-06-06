/* eslint-disable react/jsx-props-no-spreading */
import { InputProps as InputPropsMui } from '@material-ui/core'
import { StyledInput } from './InputText.styles'

interface InputTextProps extends InputPropsMui {
  endAdornment?: string
}

export const InputText = (props: InputTextProps) => {
  const { endAdornment } = props

  return <StyledInput {...props} endAdornment={endAdornment} />
}
