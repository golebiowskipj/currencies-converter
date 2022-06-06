import { flattenMessages } from './flattenMessages.utils'

describe('flattenMessages util', () => {
  const data = {
    nested_lvl_1a: {
      nested_lvl_2a: 'nested_lvl_2a',
      nested_lvl_2b: 'nested_lvl_2b',
    },
    nested_lvl_1b: {
      nested_lvl_2a: {
        nested_lvl_3a: 'nested_lvl_3a',
      },
    },
  }

  const expectedResult = {
    'nested_lvl_1a.nested_lvl_2a': 'nested_lvl_2a',
    'nested_lvl_1a.nested_lvl_2b': 'nested_lvl_2b',
    'nested_lvl_1b.nested_lvl_2a.nested_lvl_3a': 'nested_lvl_3a',
  }
  it('should flatten nested objects to one level depth', () => {
    const result = flattenMessages(data)

    expect(result).toEqual(expectedResult)
  })
})
