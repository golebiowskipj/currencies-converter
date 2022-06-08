import { Card } from 'ui-kit'
import { StyledConversionWidgetWrapper } from './ConversionWidget.styles'
import { ConversionForm } from '../ConversionForm/ConversionForm.component'
import {
  ConversionWidgetProvider,
  useConversionWidget,
} from '../ConversionWidgetProvider/ConversionWidgetProvider.component'
import { DisclaimerText } from '../DisclaimerText/DisclaimerText.component'
import { RateInfo } from '../RateInfo/RateInfo.component'

const ConversionWidgetInner = () => {
  const { isConverted } = useConversionWidget()
  return (
    <StyledConversionWidgetWrapper>
      <Card>
        <ConversionForm />
        {isConverted && <RateInfo />}
        {isConverted && <DisclaimerText />}
      </Card>
    </StyledConversionWidgetWrapper>
  )
}

export const ConversionWidget = () => (
  <ConversionWidgetProvider>
    <ConversionWidgetInner />
  </ConversionWidgetProvider>
)
