/**
 * Created by zwhu on 15/11/7.
 * 归并排序
 * 自顶向下的归并排序
 */

import Base from './base'
import {randomArray as random} from '../../randomarray'

let __compare


class Merge extends Base {

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


    let __sort = (a, lo, hi) => {
      if (lo == hi) return
      let mid = lo + ((hi - lo) / 2) | 0
      __sort(a, lo, mid)
      __sort(a, mid + 1, hi)
      merge(a, lo, mid, hi)
    }

    __sort.call(this, array, 0, array.length - 1)

    return array
  }
}


let mergesort = new Merge(random(1, 100))

let sorted = mergesort.sort().every((v, i, a) => v < a[i + 1] || i == a.length - 1)

console.log('排序的结果是:' + (sorted ? '正确的' : '错误的'))