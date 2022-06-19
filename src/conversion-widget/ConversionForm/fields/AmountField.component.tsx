import { Controller } from 'react-hook-form'
import { useTranslations } from 'translations'
import { InputNumber } from 'ui-kit'
import { StyledErrorMessage } from '../ConversionForm.styles'
import { FIELD_AMOUNT } from '../useConversionForm'
import { useConversionWidget } from '../../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const AmountField = () => {
  const {
    isConverted,
    codeFrom,
    control,
    errors,
    fromAmount,
    dispatchConversionWidgetAction,
  } = useConversionWidget()
  const t = useTranslations()

  return (
    <div>
      <Controller
        name={FIELD_AMOUNT}
        control={control}
        render={({ field: { onChange } }) => (
          <InputNumber
            id={FIELD_AMOUNT}
            type='number'
            label={t('conversionWidget.conversionForm.fieldAmount.label')}
            $endAdornment={codeFrom}
            value={fromAmount}
            onChange={e => {
              onChange(e.target.value)
              dispatchConversionWidgetAction({
                type: 'SET_FROM_AMOUNT',
                payload: e.target.value as unknown as number,
              })
            }}
            error={!!errors[FIELD_AMOUNT]?.message}
            fullWidth={!isConverted}
          />
        )}
      />
      <StyledErrorMessage>
        {errors[FIELD_AMOUNT] && errors[FIELD_AMOUNT]?.message}
      </StyledErrorMessage>
    </div>
  )
}
