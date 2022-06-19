import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormattedMessage } from 'translations'

export const FIELD_AMOUNT = 'amount'
const FIELD_AMOUNT_MIN = 0.01
export const FIELD_AMOUNT_DEFAULT = parseFloat((1.0).toFixed(2))
export const FIELD_CONVERTED_TO = 'converted'
const FIELD_CONVERTED_TO_MIN = 0.01
export const FIELD_CONVERTED_TO_DEFAULT = parseFloat((1.0).toFixed(2))
export const FIELD_CODE_FROM = 'codeFrom'
export const FIELD_CODE_FROM_DEFAULT = 'EUR'
export const FIELD_CODE_TO = 'codeTo'
export const FIELD_CODE_TO_DEFAULT = 'GBP'

const conversionValidationSchema = yup.object({
  [FIELD_AMOUNT]: yup
    .number()
    .min(FIELD_AMOUNT_MIN, () => (
      <FormattedMessage
        id='conversionWidget.conversionForm.validation.min'
        values={{ value: FIELD_AMOUNT_MIN }}
      />
    ))
    .required(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    ))
    .typeError(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    )),
  [FIELD_CONVERTED_TO]: yup
    .number()
    .min(FIELD_CONVERTED_TO_MIN, () => (
      <FormattedMessage
        id='conversionWidget.conversionForm.validation.min'
        values={{ value: FIELD_CONVERTED_TO_MIN }}
      />
    ))
    .typeError(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    )),
  [FIELD_CODE_FROM]: yup
    .string()
    .required(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    ))
    .typeError(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    )),
  [FIELD_CODE_TO]: yup
    .string()
    .required(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    ))
    .typeError(() => (
      <FormattedMessage id='conversionWidget.conversionForm.validation.required' />
    )),
})

export type ConversionFormData = yup.InferType<
  typeof conversionValidationSchema
>

export const useConversionForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<ConversionFormData>({
    resolver: yupResolver(conversionValidationSchema),
    mode: 'onChange',
    defaultValues: {
      amount: FIELD_AMOUNT_DEFAULT,
      codeFrom: FIELD_CODE_FROM_DEFAULT,
      codeTo: FIELD_CODE_TO_DEFAULT,
    },
  })

  return {
    control,
    handleSubmit,
    errors,
    getValues,
    setValue,
  }
}
