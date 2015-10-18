/**
 * Created by zwhu on 15/10/16.
 * 背包
 */

import Node from './node'

export default class Bag {
  __first = null
  __N = 0

  isEmpty() {
    return this.__N === 0
  }

  size() {
    return this.__N
  }

  add(item) {
    let node = new Node(item, this.__first)
    this.__first = node
    this.__N++
  }

  [Symbol.iterator]() {

    let current = this.__first

    return ({
      next() {
        if (current) {
          let value = current.item
            , done = current == null
          current = current.next
          return {
            done: done,
            value: value
          }
        } else {
          return {
            done: true
          }
        }
      }
    })

  }
}
