/**
 * Created by zwhu on 15/11/12.
 *
 * 基于堆的优先队列
 */

"use strict"

let less = (a, b) =>  a < b
let exch = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]

// 上浮
let swim = (a, k) => {
  let pk = k / 2 | 0
  while (k > 1 && less(pk, k)) {
    exch(a, pk, k)
    k = pk
  }
}
// 下沉
let sink = (a, k, N) => {
  while (2 * k < N) {
    let j = 2 * k
    if (j < N && less(j, j + 1)) j++
    if (!(less(k, j))) break
    exch(a, k, j)
    k = j
  }
}

class MaxPQ {

  __pq = []

  __N = 0

  constructor(maxN) {
    this.__pq = new Array(maxN + 1)
  }

  isEmpty() {
    return 0 == this.__N
  }

  size() {
    return this.__N
  }

  insert(v) {
    if (this.__N + 1 === this.__pq.length) {
      if (less(this.__pq[this.__N], v)) {
        this.__pq[this.__N] = v
        swim(this.__pq, this.__N)
      }
    } else {
      this.__pq[++this.__N] = v
    }
  }

  //return max
  delMax() {
    let max = this.__pq[1]
    exch(this.__pq, 1, this.__N--)
    this.__pq.pop()
    sink(this.__pq, 1, this.__N)
    return max
  }

  max() {
    return this.__pq[1]
  }

}

let maxpq = new MaxPQ(5)
maxpq.insert('p')
maxpq.insert('s')
maxpq.insert('t')
maxpq.insert('a')
maxpq.insert('y')
maxpq.insert('e')

console.log(maxpq.__pq)