/**
 * Created by zwhu on 15/11/3.
 * 希尔排序
 */


import Base from './base.js'

let less = (a, b) => a < b


class Shell extends Base {
  sort() {
    let array = this.__display
      , N = array.length
      , h = 1

    while (h < N / 3) h = 3 * h + 1

    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (let j = i; j >= h && this.__compare(array[j], array[j - h]); j = j - h) {
          this.exch(array, j, j - h)
        }
      }
      h = h / 3|0
    }
    return array
  }
}


let shell = new Shell([2, 7, 6, 10, 5, 9, 12, 17, 11, 4, 3, 15, 8, 1], less)

console.log(shell.sort())