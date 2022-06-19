import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from 'App'

describe('ConversionWidget', () => {
  it('has desired elements before first conversion', () => {
    const { getByLabelText, getByText, queryByLabelText, queryByText } = render(
      <App />
    )

    getByLabelText('From:')
    getByLabelText('To:')
    getByLabelText('Amount:')
    getByText('Convert')

    expect(queryByLabelText('Converted to:')).not.toBeInTheDocument()
    expect(queryByText(/1/)).not.toBeInTheDocument()
    expect(
      queryByText(/All figures are live mide-market rates/)
    ).not.toBeInTheDocument()
  })

  it('has desired default values', () => {
    const { getByTestId, getByLabelText } = render(<App />)

    expect((getByTestId('input-from') as HTMLInputElement).value).toEqual('EUR')
    expect((getByTestId('input-to') as HTMLInputElement).value).toEqual('GBP')
    expect((getByLabelText('Amount:') as HTMLInputElement).value).toEqual(
      '1.00'
    )
  })

  it('click on button with arrows exchanges currency codes', async () => {
    const { getByTestId } = render(<App />)

    const initialFromValue = (getByTestId('input-from') as HTMLInputElement)
      .value
    const initialToValue = (getByTestId('input-to') as HTMLInputElement).value

    expect(initialFromValue).toEqual('EUR')
    expect(initialToValue).toEqual('GBP')

    const button = getByTestId('exchange-button')

    userEvent.click(button)

    await waitFor(() => {
      const fromValue = (getByTestId('input-from') as HTMLInputElement).value
      const toValue = (getByTestId('input-to') as HTMLInputElement).value

      expect(fromValue).toEqual('GBP')
      expect(toValue).toEqual('EUR')
    })
  })

  it.todo(
    'click on covert button makes and api call and displays conversion data'
  )

  it.todo(
    'change of amount value is debounced, makes api call and displays conversion data'
  )
})
