// 算法步骤
// 1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
// 3. 针对所有的元素重复以上的步骤，除了最后一个。
// 4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

/**
 * @name bubbleSort 冒泡排序
 * @param { Array<Number> } arr
 * @returns { Array<Number }
 */

function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换变量
      }
    }
  }
  return arr
}

// 优化：减少内循环不必要的比较
function bubbleSort2(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    // 优化：j < len - 1 - i; 后面的已经是排好的比较大的数了，不用再比较了
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换变量
      }
    }
  }
  return arr
}

// 优化三
function bubbleSort3(arr) {
  let i = arr.length - 1

  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换变量
      }
    }
    i = pos
  }
  return arr
}

// test
const arr = [1, 4, 2, 90, 3, 4]
console.log(bubbleSort(arr))
console.log(bubbleSort2(arr))
console.log(bubbleSort3(arr))
