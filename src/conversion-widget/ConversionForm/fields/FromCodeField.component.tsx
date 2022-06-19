import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import { useTranslations } from 'translations'
import { FlagIcon, InputSelect, Typography } from 'ui-kit'
import { FIELD_CODE_FROM } from '../useConversionForm'
import { useConversionWidget } from '../../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const StyledListItem = styled.div`
  display: flex;
  align-items: center;

  & > span {
    text-transform: uppercase;
    ${Typography.paragraphSmall};
    margin-left: 0.5rem;
  }
`

export const codeItems = [
  {
    itemValue: 'EUR',
    itemDisplayName: (
      <StyledListItem>
        <FlagIcon color='primary' />
        <span>EUR</span>
      </StyledListItem>
    ),
  },
  {
    itemValue: 'GBP',
    itemDisplayName: (
      <StyledListItem>
        <FlagIcon color='action' />
        <span>GBP</span>
      </StyledListItem>
    ),
  },
  {
    itemValue: 'PLN',
    itemDisplayName: (
      <StyledListItem>
        <FlagIcon color='error' />
        <span>PLN</span>
      </StyledListItem>
    ),
  },
]

export const FromCodeField = () => {
  const { codeFrom, control, dispatchConversionWidgetAction } =
    useConversionWidget()
  const t = useTranslations()

  return (
    <div>
      <Controller
        name={FIELD_CODE_FROM}
        control={control}
        render={({ field: { onChange } }) => (
          <InputSelect
            inputTestId='input-from'
            label={t('conversionWidget.conversionForm.fieldFromCode.label')}
            labelId='code-from-label'
            onChange={e => {
              onChange(e)
              dispatchConversionWidgetAction({
                type: 'SET_CODE_FROM',
                payload: e.target.value,
              })
            }}
            selectId='code-from'
            value={codeFrom}
            items={codeItems}
          />
        )}
      />
    </div>
  )
}
