import { Controller } from 'react-hook-form'
import { useTranslations } from 'translations'
import { InputNumber } from 'ui-kit'
import { StyledErrorMessage } from '../ConversionForm.styles'
import { FIELD_CONVERTED_TO, useConversionForm } from '../useConversionForm'

export const ConvertedToField = () => {
  const { control, errors } = useConversionForm()
  const t = useTranslations()

  return (
    <>
      <Controller
        name={FIELD_CONVERTED_TO}
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputNumber
            id={FIELD_CONVERTED_TO}
            type='number'
            label={t('conversionWidget.conversionForm.fieldConvertedTo.label')}
            endAdornment='EUR'
            value={value}
            onChange={onChange}
            error={!!errors[FIELD_CONVERTED_TO]?.message}
          />
        )}
      />
      <StyledErrorMessage>
        {errors[FIELD_CONVERTED_TO] && errors[FIELD_CONVERTED_TO]?.message}
      </StyledErrorMessage>
    </>
  )
}
