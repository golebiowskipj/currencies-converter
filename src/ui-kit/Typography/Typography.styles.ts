import { css } from 'styled-components'

export const paragraph = css`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.black};
`

export const paragraphSmall = css`
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`

export const paragraphLarge = css`
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.color.black};
`
