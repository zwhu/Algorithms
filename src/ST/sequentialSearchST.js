/**
 * Created by zwhu on 15/11/16.
 *
 * 顺序查找(基于无序链表)
 */

import assert from 'assert'

class Node {
  constructor(key, val, next) {
    this.key  = key
    this.val  = val
    this.next = next
  }
}

class sequentialSearchST {

  first = null

  put(key, val) {

    for (let node of this) {
      if (key === node.key) {
        node.val = val
        return
      }
    }

    this.first = new Node(key, val, this.first)

  }

  get(key) {

    for (let node of this) {
      if (key === node.key) {
        return node.val
      }
    }

    return null

  }

  [Symbol.iterator]() {

    let current = this.first
    return ({
      next() {
        if (current) {
          let node = current
          current  = current.next
          return {
            done: false,
            value: node
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

let st = new sequentialSearchST()

assert.equal(st.get('a'), null)
st.put('a', '1')
assert.equal(st.get('a'), '1')
st.put('b', '2')
assert.equal(st.get('b'), '2')
st.put('b', '3')
assert.equal(st.get('a'), '1')
console.log(st.get('b'))
assert.equal(st.get('b'), '3')