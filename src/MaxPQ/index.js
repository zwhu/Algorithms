/**
 * Created by zwhu on 15/11/12.
 *
 * 基于堆的优先队列
 */

"use strict"

let less = (a, i, j) =>  a[i] < a[j]
let exch = (a, i, j) => {
  let temp = a[i]
  a[i]     = a[j]
  a[j]     = temp
}

// 上浮
let swim = (a, k) => {
  console.log(a, k)

  while (k > 1 && less(a, (k / 2) | 0, k)) {
    exch(a, (k / 2) | 0, k)
    k = (k / 2) | 0
  }
}
// 下沉
let sink = (a, k, N) => {
  while (2 * k <= N) {
    let j = 2 * k
    if (j < N && less(a, j, j + 1)) j++
    if (!(less(a, k, j))) break
    exch(a, k, j)
    k = j
  }
}

class MaxPQ {

  __pq = [];

  __N = 0;

  isEmpty() {
    return 0 == this.__N
  }

  size() {
    return this.__N
  }

  insert(v) {
    this.__pq[++this.__N] = v
    swim(this.__pq, this.__N)
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

let maxpq = new MaxPQ()
maxpq.insert(10)
maxpq.insert(5)
maxpq.insert(1)
maxpq.insert(4)
maxpq.insert(6)
maxpq.insert(2)
maxpq.insert(9)
maxpq.insert(13)
maxpq.insert(3)

console.log(maxpq.__pq)
console.log(maxpq.size())
console.log(maxpq.max())
console.log(maxpq.delMax())
console.log(maxpq.delMax())
console.log(maxpq.delMax())
console.log(maxpq.delMax())
console.log(maxpq.delMax())