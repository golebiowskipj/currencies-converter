import styled from 'styled-components'
import { Typography } from 'ui-kit'

export const StyledText = styled.p`
  ${Typography.paragraph};
  color: ${({ theme }) => theme.color.black};
  margin-top: 2rem;
`
