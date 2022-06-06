import { StyledConversionWidgetWrapper } from './ConversionWidget.styles'
import { Button } from '../../ui-kit'
import { Card } from '../../ui-kit/Card/Card.component'

export const ConversionWidget = () => (
  <StyledConversionWidgetWrapper>
    <Card>
      widget<Button>Convert</Button>
    </Card>
  </StyledConversionWidgetWrapper>
)
