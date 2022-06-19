/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react'
import { Control, FieldError, UseFormHandleSubmit } from 'react-hook-form'
import { debounce } from 'lodash'
import {
  useConversionForm,
  FIELD_AMOUNT_DEFAULT,
  FIELD_CONVERTED_TO_DEFAULT,
} from '../ConversionForm/useConversionForm'
import { exhaustiveCheck } from '../utils/exhaustiveCheck'
import { getConversion } from '../api/getConversion'

type ConversionWidgetAction =
  | { type: 'CHANGE_CONVERTED' }
  | { type: 'LOADING' }
  | { type: 'SET_FROM_AMOUNT'; payload: number }
  | { type: 'SET_TO_AMOUNT'; payload: number }
  | {
      type: 'SET_FETCHED_DATA_FROM'
      payload: {
        rate: string
        amountTo: number
      }
    }

interface ConversionWidgetContextValue {
  isConverted: boolean
  rate: string | undefined
  fromAmount: number
  toAmount: number | undefined
  codeFrom: string
  codeTo: string
  isLoading: boolean
  dispatchConversionWidgetAction: Dispatch<ConversionWidgetAction>
  control: Control<any> | undefined
  errors: Record<string, FieldError | undefined>
  handleSubmit: UseFormHandleSubmit<any> | undefined
  convertManual: () => void
  convertDebounced: (params: any) => void
}

type ConversionWidgetState = Omit<
  ConversionWidgetContextValue,
  | 'dispatchConversionWidgetAction'
  | 'control'
  | 'errors'
  | 'handleSubmit'
  | 'convertManul'
  | 'convertDebounced'
>

const reducer = (
  state: ConversionWidgetState,
  action: ConversionWidgetAction
) => {
  switch (action.type) {
    case 'CHANGE_CONVERTED':
      return { ...state, isLoading: false, isConverted: true }
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'SET_FROM_AMOUNT': {
      return { ...state, isLoading: false, fromAmount: action.payload }
    }
    case 'SET_TO_AMOUNT': {
      return { ...state, isLoading: false, toAmount: action.payload }
    }
    case 'SET_FETCHED_DATA_FROM': {
      return {
        ...state,
        isLoading: false,
        toAmount: action.payload.amountTo,
        rate: action.payload.rate,
        isConverted: true,
      }
    }
    default:
      return exhaustiveCheck(action)
  }
}

const initialValue: ConversionWidgetContextValue = {
  isConverted: false,
  rate: undefined,
  fromAmount: FIELD_AMOUNT_DEFAULT,
  toAmount: FIELD_CONVERTED_TO_DEFAULT,
  codeFrom: 'EUR',
  codeTo: 'GBP',
  isLoading: false,
  dispatchConversionWidgetAction: () => {},
  control: undefined,
  errors: {},
  handleSubmit: undefined,
  convertManual: () => {},
  convertDebounced: () => {},
}

export const ConversionWidgetContext = createContext(initialValue)

interface ConversionWidgetProviderProps {
  children: ReactNode
}

export const ConversionWidgetProvider = (
  props: ConversionWidgetProviderProps
) => {
  const { children } = props
  const { control, errors, handleSubmit } = useConversionForm()
  const shouldConvert = useRef(false)

  const [
    { isLoading, isConverted, codeFrom, codeTo, fromAmount, rate, toAmount },
    dispatch,
  ] = useReducer(reducer, initialValue)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const convertDebounced = useCallback(
    debounce(async ({ amountFrom }: { amountFrom: number }) => {
      dispatch({ type: 'LOADING' })

      const conversion = await getConversion({
        codeFrom,
        codeTo,
        amountFrom,
      })
      if (!conversion) return

      dispatch({
        type: 'SET_FETCHED_DATA_FROM',
        payload: {
          amountTo: conversion.toAmount,
          rate: conversion.rate,
        },
      })
    }, 500),
    [isConverted]
  )

  const convertManual = useCallback(async () => {
    dispatch({ type: 'LOADING' })

    const conversion = await getConversion({
      codeFrom,
      codeTo,
      amountFrom: fromAmount,
    })

    if (!conversion) return

    dispatch({
      type: 'SET_FETCHED_DATA_FROM',
      payload: {
        amountTo: conversion.toAmount,
        rate: conversion.rate,
      },
    })
  }, [codeFrom, codeTo, fromAmount])

  useEffect(() => {
    if (isConverted) {
      if (shouldConvert.current) {
        convertDebounced({ amountFrom: fromAmount })
      } else {
        shouldConvert.current = true
      }
    }
  }, [fromAmount, convertDebounced, isConverted])

  return (
    <ConversionWidgetContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isConverted,
        isLoading,
        rate,
        codeFrom,
        codeTo,
        fromAmount,
        toAmount,
        dispatchConversionWidgetAction: dispatch,
        control,
        errors,
        handleSubmit,
        convertManual,
        convertDebounced,
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
