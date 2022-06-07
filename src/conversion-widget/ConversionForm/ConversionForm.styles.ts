import styled from 'styled-components'
import { Typography } from 'ui-kit'

export const StyledErrorMessage = styled.span`
  ${Typography.paragraphSmall};
  color: ${({ theme }) => theme.color.error};
  display: block;
  margin-top: 0.5rem;
`
