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
        grid-column-gap: 2rem;
      `
    }

    return css`
      grid-template-columns: 1fr;
    `
  }}
`
