/**
 * Created by zwhu on 15/11/2.
 * 插入排序
 * 将数组中元素通过和之前元素的比较插入到合适的位置
 *
 */


import Base from './base.js'

let less = (a, b) => a < b

class Insertion extends Base {
  sort() {
    let array = this.__display
    for (let i = 1; i < array.length; i++) {
      for (let j = i; j > 0 && this.__compare(array[j], array[j - 1]); j--) {
        this.exch(array, j, j - 1)
      }
    }
    return array
  }

}

let insertion = new Insertion([2, 7, 6, 10, 5, 9], less)

console.log(insertion.sort())
