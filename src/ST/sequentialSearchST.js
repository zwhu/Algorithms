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

  N = 0

  size() {
    return this.N
  }

  keys() {
    var keys = []
    for (let {key} of this) {
      keys.push(key)
    }
    return keys
  }

  // 即时删除
  delete(key) {
    if(key === this.first.key) {
      this.first = this.first.next
      return
    }

    for (let node of this) {
      if (node.next && key === node.next.key) {
        node.next = node.next && node.next.next
        return
      }
    }
  }

  // 延时删除
  deleteAfter(key) {
    for (let node of this) {
      if (key === node.key) {
        node.val = null
        return
      }
    }
  }


  put(key, val) {
    if (null === val) this.delete(key)

    for (let node of this) {
      if (key === node.key) {
        node.val = val
        return
      }
    }

    this.first = new Node(key, val, this.first)
    this.N++

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
assert.equal(st.get('b'), '3')
assert.deepEqual(st.keys(), ['b', 'a'])
st.delete('b')
assert.equal(st.get('b'), null)
assert.equal(st.get('a'), 1)
st.put('b', '3')
st.delete('a')
assert.equal(st.get('a'), null)


