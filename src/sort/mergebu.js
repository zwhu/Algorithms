/**
 * Created by zwhu on 15/11/8.
 * 归并排序
 * 自底向上的归并排序
 */


import Base from './base'
import {randomArray as random} from '../../randomarray'

class MergeBU extends Base {

  sort() {
    let array = this.__display


    let merge = (a, lo, mid, hi) => {
      let aux = []
        , i = lo
        , j = mid + 1

      for (let k = lo; k <= hi; k++)
        aux[k] = a[k]

      for (let k = lo; k <= hi; k++) {
        if (i > mid) a[k] = aux[j++]
        else if (j > hi) a[k] = aux[i++]
        else if (this.__compare(aux[i], aux[j])) a[k] = aux[i++]
        else a[k] = aux[j++]
      }

    }

    let N = array.length

    // i = 1,2,4,8
    // 一一合并成两个元素的数组,二二合并成四个元素的数组,四四合并成八个元素的数组,直到结束
    for (let i = 1; i < N; i = i + i) {

      for (let lo = 0; lo < N - i; lo += i + i) {
        // lo is min
        // mid = lo + i - 1
        // hi = Math.min(lo + i + i - 1, N - 1) => 当最大值大于数组长度的时候,取数组长度为最大值
        merge(array, lo, lo + i - 1, Math.min(lo + i + i - 1, N - 1))
      }
    }


    return array
  }
}


let mergesort = new MergeBU(random(1, 100))

let sorted = mergesort.sort().every((v, i, a) => v < a[i + 1] || i == a.length - 1)

console.log('排序的结果是:' + (sorted ? '正确的' : '错误的'))