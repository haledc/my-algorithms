const SegmentTree = require('../SegmentTree')
let segmentTree, arr

describe('SegmentTree', () => {
  beforeEach(() => {
    arr = [2, 3, -1, 4, -2, 0, 5, 6]
    const sum = (a, b) => a + b
    segmentTree = new SegmentTree(arr, sum)
  })

  test('gitSize', () => {
    expect(segmentTree.getSize()).toBe(8)
  })

  test('get', () => {
    expect(segmentTree.get(0)).toBe(2)
    expect(segmentTree.get(1)).toBe(3)
    expect(segmentTree.get(4)).toBe(-2)
  })

  test('query', () => {
    expect(segmentTree.query(0, 2)).toBe(4)
    expect(segmentTree.query(1, 3)).toBe(6)
    expect(segmentTree.query(2, 5)).toBe(1)
  })

  test('set', () => {
    expect(segmentTree.query(0, 2)).toBe(4)
    segmentTree.set(0, 5)
    expect(segmentTree.query(0, 2)).toBe(7)

    expect(segmentTree.query(2, 5)).toBe(1)
    segmentTree.set(3, 1)
    expect(segmentTree.query(2, 5)).toBe(-2)

    expect(segmentTree.query(4, 6)).toBe(3)
    segmentTree.set(7, 10)
    expect(segmentTree.query(4, 6)).toBe(3)
  })

  test('merge', () => {
    const max = (a, b) => (a - b > 0 ? a : b)
    segmentTree = new SegmentTree(arr, max)
    expect(segmentTree.query(0, 2)).toBe(3)
    expect(segmentTree.query(1, 3)).toBe(4)
    expect(segmentTree.query(2, 5)).toBe(4)

    const min = (a, b) => (a - b > 0 ? b : a)
    segmentTree = new SegmentTree(arr, min)
    expect(segmentTree.query(0, 2)).toBe(-1)
    expect(segmentTree.query(1, 3)).toBe(-1)
    expect(segmentTree.query(2, 5)).toBe(-2)
  })
})