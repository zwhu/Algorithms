/**
 * Created by zwhu on 15/10/30.
 *
 * 选择排序
 *
 * 选择数组中最小的数和第一个数交换，以后每次循环都取数组中剩下的数
 * 中最小的数和接下来的数组交换
 */

// 怎样画成动画呢？

import Base from './base.js'

let less = (a, b) => a < b

class Selection extends Base {
  sort() {
    let array = this.__display
    for (let i = 0; i < array.length; i++) {
      let min = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) min = j
      }
      this.exch(array, i, min)
    }
    return array
  }
}

let selection = new Selection([2, 7, 6, 10, 5, 9], less)
console.log(selection.sort())

