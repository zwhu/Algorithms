/**
 * Created by zwhu on 15/10/30.
 *
 * 选择排序
 *
 * 选择数组中最小的数和第一个数交换，以后每次循环都取数组中剩下的数
 * 中最小的数和接下来的数组交换
 */

// 怎样画成动画呢？

let less = (a, b) => a < b

let exch = (array, i, j) => [array[i], array[j]] = [array[j], array[i]]

let Selection = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
    }
    exch(array, i, min)
  }
  return array
}

console.log(Selection([2, 7, 6, 10, 5, 9]))

