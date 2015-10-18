/**
 * Created by zwhu on 15/10/15.
 * 下压堆栈（链表实现）后进先出
 */


//TODO: 1. 增加Iterator，可能是继承来的
// 2. 增加测试用例


import Node from './node'
export default class Stack {
  __first = null
  __N = 0

  isEmpty() {
    return this.__N === 0
  }

  size() {
    return this.__N
  }

  push(item) {
    let node = new Node(item, this.__first)
    this.__first = node
    this.__N++
  }

  pop() {
    let item = this.__first.item
    this.__first = this.__first.next
    this.__N--
    return item
  }

}
