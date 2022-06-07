/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useTranslations } from 'translations'
import { Button } from 'ui-kit'
import { AmountField } from './fields/AmountField.component'
import { ConversionFormData, useConversionForm } from './useConversionForm'

export const ConversionForm = () => {
  const t = useTranslations()
  const { handleSubmit, setFormStatus, formStatus } = useConversionForm()

  const onSubmit = (data: ConversionFormData) => {
    setFormStatus('CONVERTED')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AmountField />
      {formStatus === 'INITIAL' && (
        <Button type='submit'>
          {t('conversionWidget.conversionForm.submitButton')}
        </Button>
      )}
    </form>
  )
}
