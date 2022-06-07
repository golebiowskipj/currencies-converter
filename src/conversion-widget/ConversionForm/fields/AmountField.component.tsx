import { Controller } from 'react-hook-form'
import { useTranslations } from 'translations'
import { InputNumber } from 'ui-kit'
import { StyledErrorMessage } from '../ConversionForm.styles'
import { FIELD_AMOUNT, useConversionForm } from '../useConversionForm'

export const AmountField = () => {
  const { control, errors } = useConversionForm()
  const t = useTranslations()

  return (
    <>
      <Controller
        name={FIELD_AMOUNT}
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputNumber
            id={FIELD_AMOUNT}
            type='number'
            label={t('conversionWidget.conversionForm.fieldAmount.label')}
            endAdornment='EUR'
            value={value}
            onChange={onChange}
            error={!!errors[FIELD_AMOUNT]?.message}
          />
        )}
      />
      <StyledErrorMessage>
        {errors[FIELD_AMOUNT] && errors[FIELD_AMOUNT]?.message}
      </StyledErrorMessage>
    </>
  )
}
