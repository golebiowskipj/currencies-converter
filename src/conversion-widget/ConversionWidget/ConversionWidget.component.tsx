import { Card, Loader } from 'ui-kit'
import { StyledConversionWidgetWrapper } from './ConversionWidget.styles'
import { ConversionForm } from '../ConversionForm/ConversionForm.component'
import {
  ConversionWidgetProvider,
  useConversionWidget,
} from '../ConversionWidgetProvider/ConversionWidgetProvider.component'
import { DisclaimerText } from '../DisclaimerText/DisclaimerText.component'
import { RateInfo } from '../RateInfo/RateInfo.component'

const ConversionWidgetInner = () => {
  const { isConverted, isLoading } = useConversionWidget()

  const content = isLoading ? (
    <Loader />
  ) : (
    <>
      <ConversionForm />
      {isConverted && <RateInfo />}
      {isConverted && <DisclaimerText />}
    </>
  )

  return (
    <StyledConversionWidgetWrapper>
      <Card>{content}</Card>
    </StyledConversionWidgetWrapper>
  )
}

export const ConversionWidget = () => (
  <ConversionWidgetProvider>
    <ConversionWidgetInner />
  </ConversionWidgetProvider>
)
