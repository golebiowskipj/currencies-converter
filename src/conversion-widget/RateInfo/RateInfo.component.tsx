import { StyledText } from './RateInfo.styles'
import { useConversionWidget } from '../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const RateInfo = () => {
  const { rate, codeFrom, codeTo } = useConversionWidget()

  return (
    <StyledText>
      1 {codeFrom} = {rate} {codeTo}
    </StyledText>
  )
}
