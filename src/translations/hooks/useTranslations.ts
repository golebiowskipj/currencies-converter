import { ReactElement, ReactNode, useCallback } from 'react'
import { useIntl } from 'react-intl'

type X = string | ReactElement

export const useTranslations = <T extends X = string>() => {
  const { formatMessage } = useIntl()

  const memoized = useCallback(
    (
      path: string,
      values?: {
        [key: string]: string | number | ((args: ReactNode[]) => ReactElement)
      }
    ) => formatMessage({ id: path }, values) as T,
    [formatMessage]
  )

  return memoized
}
