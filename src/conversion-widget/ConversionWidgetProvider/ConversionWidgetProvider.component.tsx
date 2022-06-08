/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useState,
} from 'react'

interface ConversionWidgetContextValue {
  isConverted: boolean
  setConverted: (() => void) | undefined
  rate: string | undefined
  codeFrom: string
  codeTo: string
}

const initialValue: ConversionWidgetContextValue = {
  isConverted: false,
  setConverted: undefined,
  rate: undefined,
  codeFrom: 'EUR',
  codeTo: 'GBP',
}

export const ConversionWidgetContext = createContext(initialValue)

interface ConversionWidgetProviderProps {
  children: ReactNode
}

export const ConversionWidgetProvider = (
  props: ConversionWidgetProviderProps
) => {
  const [isConverted, setIsConverted] = useState(false)
  const { children } = props

  const setConverted = useCallback(() => {
    setIsConverted(true)
  }, [])

  return (
    <ConversionWidgetContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isConverted,
        setConverted,
        rate: '0.8',
        codeFrom: 'EUR',
        codeTo: 'GBP',
      }}
    >
      {children}
    </ConversionWidgetContext.Provider>
  )
}

export const useConversionWidget = () => {
  const ctx = useContext(ConversionWidgetContext)
  if (!ctx) {
    throw new Error('Error: Conversion Widget Context not available')
  }

  return ctx
}
