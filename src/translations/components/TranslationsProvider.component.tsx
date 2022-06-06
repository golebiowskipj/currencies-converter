import { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { flattenMessages } from '../utils/flattenMessages.utils'
import en from '../en.json'

const messages = flattenMessages(en)

export function TranslationsProvider({ children }: { children: ReactNode }) {
  return (
    <IntlProvider messages={messages} locale='en-US' defaultLocale='en-US'>
      {children}
    </IntlProvider>
  )
}
