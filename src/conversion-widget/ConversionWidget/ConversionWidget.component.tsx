import { useTranslations } from 'translations'
import { StyledConversionWidgetWrapper } from './ConversionWidget.styles'
import { Button } from '../../ui-kit'
import { Card } from '../../ui-kit/Card/Card.component'

export const ConversionWidget = () => {
  const t = useTranslations()

  return (
    <StyledConversionWidgetWrapper>
      <Card>
        widget<Button>{t('cta')}</Button>
      </Card>
    </StyledConversionWidgetWrapper>
  )
}
