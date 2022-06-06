/* eslint-disable no-console */
import { ConversionWidget } from './conversion-widget/ConversionWidget/ConversionWidget.component'
import { GlobalStyles, ResetStyles, ThemeProvider } from './ui-kit'

export const App = () => (
  <ThemeProvider>
    <ResetStyles />
    <GlobalStyles />
    <ConversionWidget />
  </ThemeProvider>
)
