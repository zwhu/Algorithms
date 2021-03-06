/**
 * Created by zwhu on 15/10/16.
 * 先进先出队列(链表实现)
 */

import Node from './node'
import Iterator from './iterator'

export default class Queue extends Iterator {

  __first = null
  __last = null
  __N = 0

  isEmpty() {
    return this.__N === 0
  }

  size() {
    return this.__N
  }

  enqueue(item) {
    let node = new Node(item, null)
    if (this.isEmpty())
      this.__last = this.__first = node
    else
      this.__last = this.__last.next = node
    this.__N++
  }

  dequeue() {
    let item = this.__first.item
    this.__first = this.__first.next
    this.__N--
    return item
  }
}