/* eslint-disable no-console */
import { Button, GlobalStyles, ResetStyles, ThemeProvider } from './ui-kit'

export const App = () => (
  <ThemeProvider>
    <ResetStyles />
    <GlobalStyles />
    <div>
      <Button>elo</Button>
    </div>
  </ThemeProvider>
)
