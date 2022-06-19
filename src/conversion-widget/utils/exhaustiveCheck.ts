export function exhaustiveCheck(_param: never): never {
  throw new Error('You must have missed some switch case', _param)
}
