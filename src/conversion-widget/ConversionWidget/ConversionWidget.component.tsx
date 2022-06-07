import { ConversionForm } from 'conversion-widget/ConversionForm/ConversionForm.component'
import { Card } from 'ui-kit'
import { StyledConversionWidgetWrapper } from './ConversionWidget.styles'

export const ConversionWidget = () => {
  return (
    <StyledConversionWidgetWrapper>
      <Card>
        <ConversionForm />
      </Card>
    </StyledConversionWidgetWrapper>
  )
}
