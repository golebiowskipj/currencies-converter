/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useTranslations } from 'translations'
import { Box, Button } from 'ui-kit'
import { AmountField } from './fields/AmountField.component'
import { ConvertedToField } from './fields/ConvertedToField.component'
import { ConversionFormData, useConversionForm } from './useConversionForm'
import { StyledRowNumberInputs } from './ConversionForm.styles'
import { useConversionWidget } from '../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const ConversionForm = () => {
  const t = useTranslations()
  const { handleSubmit } = useConversionForm()
  const { setConverted, isConverted } = useConversionWidget()

  const onSubmit = (data: ConversionFormData) => {
    if (setConverted) setConverted()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledRowNumberInputs isConverted={isConverted}>
        <AmountField />
        {isConverted && <ConvertedToField />}
      </StyledRowNumberInputs>

      {!isConverted && (
        <Box style={{ marginTop: '4rem' }}>
          <Button type='submit' fullWidth>
            {t('conversionWidget.conversionForm.submitButton')}
          </Button>
        </Box>
      )}
    </form>
  )
}
