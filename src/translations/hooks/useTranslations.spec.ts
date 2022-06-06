/* eslint-disable import/no-extraneous-dependencies */
import { renderHook } from '@testing-library/react-hooks'
import { useTranslations } from './useTranslations'
import { TranslationsProvider } from '../components/TranslationsProvider.component'
import en from '../en.json'

describe('UseTranslations', () => {
  it('Should translate string keys', () => {
    const { result } = renderHook(() => useTranslations(), {
      wrapper: TranslationsProvider,
    })

    expect(result.current('cta')).toBe(en.cta)
  })
})
