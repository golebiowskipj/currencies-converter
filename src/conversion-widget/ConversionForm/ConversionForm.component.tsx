/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useTranslations } from 'translations'
import { Box, Button } from 'ui-kit'
import { AmountField } from './fields/AmountField.component'
import { ConvertedToField } from './fields/ConvertedToField.component'
import { StyledRowNumberInputs } from './ConversionForm.styles'
import { useConversionWidget } from '../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const ConversionForm = () => {
  const t = useTranslations()
  const { isConverted, handleSubmit, convertManual } = useConversionWidget()

  const onSubmit = () => {
    convertManual()
  }

  if (!handleSubmit) return null

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
