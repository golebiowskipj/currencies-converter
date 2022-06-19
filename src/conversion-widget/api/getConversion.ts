interface GetConversionRequest {
  codeTo: string
  codeFrom: string
  amountFrom: number
}

interface GetConversionResponse {
  rate: string
  toAmount: number
}

const BASE_URL = 'https://my.transfergo.com/api/fx-rates'

export const getConversion = async (request: GetConversionRequest) => {
  try {
    const response = await fetch(
      `${BASE_URL}?from=${request.codeFrom}&to=${request.codeTo}&amount=${request.amountFrom}`
    )

    const conversionData = (await response.json()) as GetConversionResponse

    return conversionData
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error during getting conversion data', err)
    return null
  }
}
