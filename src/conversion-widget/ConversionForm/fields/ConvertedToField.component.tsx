import { Controller } from 'react-hook-form'
import { useTranslations } from 'translations'
import { InputNumber } from 'ui-kit'
import { StyledErrorMessage } from '../ConversionForm.styles'
import { FIELD_CONVERTED_TO } from '../useConversionForm'
import { useConversionWidget } from '../../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const ConvertedToField = () => {
  const { codeTo, control, errors, toAmount } = useConversionWidget()
  const t = useTranslations()

  return (
    <div>
      <Controller
        name={FIELD_CONVERTED_TO}
        control={control}
        render={() => (
          <InputNumber
            disabled
            id={FIELD_CONVERTED_TO}
            type='number'
            label={t('conversionWidget.conversionForm.fieldConvertedTo.label')}
            $endAdornment={codeTo}
            value={toAmount}
            onChange={() => {
              return null
            }}
            error={!!errors[FIELD_CONVERTED_TO]?.message}
          />
        )}
      />
      <StyledErrorMessage>
        {errors[FIELD_CONVERTED_TO] && errors[FIELD_CONVERTED_TO]?.message}
      </StyledErrorMessage>
    </div>
  )
}
