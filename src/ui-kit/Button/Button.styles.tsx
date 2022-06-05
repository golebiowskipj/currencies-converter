import styled, { css } from 'styled-components'
import { paragraph } from '../Typography/Typography.styles'

export const StyledButton = styled.button<{ fullWidth?: boolean }>`
  ${paragraph};
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem;

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        width: 100%;
      `

    return css`
      width: fit-content;
    `
  }}
`
