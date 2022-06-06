import { useTranslations } from 'translations'
import { Button, InputText, Card } from 'ui-kit'
import { StyledConversionWidgetWrapper } from './ConversionWidget.styles'

export const ConversionWidget = () => {
  const t = useTranslations()

  return (
    <StyledConversionWidgetWrapper>
      <Card>
        <InputText type='number' endAdornment='EUR' />
        <Button>{t('cta')}</Button>
      </Card>
    </StyledConversionWidgetWrapper>
  )
}
