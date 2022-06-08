import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormattedMessage } from 'translations'

export const FIELD_AMOUNT = 'amount'
const FIELD_AMOUNT_MIN = 0.01
const FIELD_AMOUNT_DEFAULT = parseFloat((1.0).toFixed(2))
export const FIELD_CONVERTED_TO = 'converted'
const FIELD_CONVERTED_TO_MIN = 0.01
const FIELD_CONVERTED_TO_DEFAULT = parseFloat((1.0).toFixed(2))

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
})

export type ConversionFormData = yup.InferType<
  typeof conversionValidationSchema
>

export const useConversionForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ConversionFormData>({
    defaultValues: {
      [FIELD_AMOUNT]: FIELD_AMOUNT_DEFAULT,
      [FIELD_CONVERTED_TO]: FIELD_CONVERTED_TO_DEFAULT,
    },
    resolver: yupResolver(conversionValidationSchema),
    mode: 'onChange',
  })

  return {
    control,
    handleSubmit,
    errors,
  }
}
