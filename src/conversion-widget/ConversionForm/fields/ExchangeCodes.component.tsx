import styled from 'styled-components'
import { ArrowsIcon } from 'ui-kit'
import { useConversionWidget } from '../../ConversionWidgetProvider/ConversionWidgetProvider.component'

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`

export const ExchangeCodes = () => {
  const { dispatchConversionWidgetAction } = useConversionWidget()
  return (
    <StyledButton
      type='button'
      data-testid='exchange-button'
      onClick={() => dispatchConversionWidgetAction({ type: 'SWITCH_CODES' })}
    >
      <ArrowsIcon />
    </StyledButton>
  )
}
