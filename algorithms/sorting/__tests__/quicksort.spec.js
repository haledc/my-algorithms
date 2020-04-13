const { quickSort, quickSort2 } = require('../quicksort')
let array, sortedArr

describe('test quickSort', () => {
  beforeEach(() => {
    array = [1, 7, 5, 10, 3, 4, 5, 2]
    sortedArr = [1, 2, 3, 4, 5, 5, 7, 10]
  })

  test('quickSort', () => {
    expect(quickSort(array)).toEqual(sortedArr)
  })

  test('quickSort2', () => {
    expect(quickSort2(array)).toEqual(sortedArr)
  })
})