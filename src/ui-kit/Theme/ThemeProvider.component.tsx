import React from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { theme } from './Theme.consts'

interface ThemeProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProps) {
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
}
