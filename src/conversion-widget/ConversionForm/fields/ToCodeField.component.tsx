import { Controller } from 'react-hook-form'
import { useTranslations } from 'translations'
import { InputSelect } from 'ui-kit'
import { codeItems } from './FromCodeField.component'
import { FIELD_CODE_TO } from '../useConversionForm'
import { useConversionWidget } from '../../ConversionWidgetProvider/ConversionWidgetProvider.component'

export const ToCodeField = () => {
  const { codeTo, control, dispatchConversionWidgetAction } =
    useConversionWidget()
  const t = useTranslations()

  return (
    <div>
      <Controller
        name={FIELD_CODE_TO}
        control={control}
        render={({ field: { onChange } }) => (
          <InputSelect
            label={t('conversionWidget.conversionForm.fieldToCode.label')}
            labelId='code-to-label'
            onChange={e => {
              onChange(e)
              dispatchConversionWidgetAction({
                type: 'SET_CODE_TO',
                payload: e.target.value,
              })
            }}
            selectId='code-to'
            value={codeTo}
            items={codeItems}
          />
        )}
      />
    </div>
  )
}
