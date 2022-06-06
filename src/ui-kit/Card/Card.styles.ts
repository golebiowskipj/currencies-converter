import styled from 'styled-components'

export const StyledCard = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadowVariants.basic};
`
