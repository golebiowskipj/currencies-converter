import { InputLabel } from '@material-ui/core'
import styled from 'styled-components'

export const StyledLabel = styled(InputLabel)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.grey};
`
