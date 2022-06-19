import styled, { css } from 'styled-components'
import { Typography } from 'ui-kit'

export const StyledErrorMessage = styled.span`
  ${Typography.paragraphSmall};
  color: ${({ theme }) => theme.color.error};
  display: block;
  margin-top: 0.5rem;
`

export const StyledRowNumberInputs = styled.div<{ isConverted: boolean }>`
  display: grid;

  ${({ isConverted }) => {
    if (isConverted) {
      return css`
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3rem;
      `
    }

    return css`
      grid-template-columns: 1fr;
    `
  }}
`

export const StyledRowCodeSelects = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem 1fr;
  margin-bottom: 2rem;
`
