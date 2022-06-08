import { useTranslations } from 'translations'
import { StyledText } from './DisclaimerField.styles'

export const DisclaimerText = () => {
  const t = useTranslations()

  return <StyledText>{t('conversionWidget.disclaimerText')}</StyledText>
}
