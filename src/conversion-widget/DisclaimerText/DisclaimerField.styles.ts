import styled from 'styled-components'
import { Typography } from 'ui-kit'

export const StyledText = styled.p`
  ${Typography.paragraphSmall};
  color: ${({ theme }) => theme.color.grey};
  margin-top: 1rem;
`
