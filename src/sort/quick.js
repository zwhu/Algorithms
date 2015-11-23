/**
 * Created by zwhu on 15/11/9.
 *
 * 快排
 */

import Base from './base'
import {randomArray as random} from '../../randomarray'


// 快排的切分
// 将数组切分成两个数组
// 左边数组中的值小于a[i],右边数组中的值大于a[i]
// 分治思想

let less = (a, b) => {
  return a < b
}

let exch = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]]
}

export default class Quick {

  constructor(array) {
    this.__display = array
  }

  sort() {
    let array = this.__display

    let __partition = (a, lo, hi) => {

      let i = lo, j = hi + 1, v = a[lo]

      while (1) {
        while (less(a[++i], v)) if (i == hi) break
        while (less(v, a[--j])) if (j == lo) break
        if (i >= j) break
        exch(a, i, j)
      }

      exch(a, lo, j)

      return j
    }

    function __sort(a, lo, hi) {
      if (lo >= hi) return
      let p = __partition(array, lo, hi)
      __sort(a, lo, p - 1)
      __sort(a, p + 1, hi)
    }

    __sort(array, 0, array.length - 1)

    return array
  }
}

//let quick = new Quick(random(1, 1000))
//
//let sorted   = quick.sort()
//let isSorted = sorted.every((v, i, a) => v < a[i + 1] || i == a.length - 1)
//
//console.log('排序的结果是:' + (isSorted ? 'right' : 'error'))


