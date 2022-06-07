/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

interface CustomTheme {
  color: {
    white: '#FFFFFF'
    primary: '#25d743'
    black: '#000000'
    grey: '#a3a3a3'
    error: '#ff0000'
  }
  fontFamily: {
    headline: 'Geller'
    body: 'Inter'
  }
  shadowVariants: {
    basic: `0px 2px 4px -2px rgba(66, 87, 79, 0.12),
    0px 4px 4px -2px rgba(66, 87, 79, 0.08)`
  }
  media: {
    minTablet: '@media(min-width: 767px)'
    minDesktop: '@media(min-width: 1200px)'
  }
  transition: '0.3s cubic-bezier(0.17, 0.67, 0.31, 1.04)'
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
