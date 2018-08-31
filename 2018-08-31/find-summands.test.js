import { findSummands } from './find-summands'

describe('find summands', () => {
  it('gets two numbers from a list that add up to a result number', () => {
    const list = [21, 49, 52, 89]
    const result = 73
    const actual = findSummands(list, result)
    const expected = [21, 52] 

    expect(actual).toEqual(expected)
  })
})