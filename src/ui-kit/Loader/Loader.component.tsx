import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

const StyledLoader = styled(CircularProgress)`
  &&& {
    color: ${({ theme }) => theme.color.primary};
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = () => (
  <StyledWrapper>
    <StyledLoader />
  </StyledWrapper>
)
