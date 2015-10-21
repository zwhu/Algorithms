/**
 * Created by zwhu on 15/10/16.
 * 背包
 */

import Node from './node'
import Iterator from './iterator'

export default class Bag extends Iterator {
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

}
