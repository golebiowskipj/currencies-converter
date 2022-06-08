import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { paragraph, paragraphLarge } from '../Typography/Typography.styles'

export const StyledInput = styled(TextField)`
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.color.grey};
    text-transform: uppercase;

    &.Mui-disabled {
      color: ${({ theme }) => theme.color.grey};
    }
  }
  &.MuiInput-root {
    ${paragraph};
    color: ${({ theme }) => theme.color.grey};
  }

  .MuiInputBase-input {
    ${paragraphLarge};
    color: ${({ theme }) => theme.color.black};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='search'] {
    -moz-appearance: textfield;
  }

  /* remove outsideof arrows button */
  input[type='search']::-webkit-outside-spin-button {
    display: none;
  }
`
