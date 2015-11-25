/**
 * Created by zwhu on 15/11/22.
 *
 * 二分查找树
 */

import assert from 'assert'

class Node {
  key
  val
  N
  left  = null
  right = null

  constructor(key, val, N) {
    this.key = key
    this.val = val
    this.N   = N
  }
}

class BinarySearchTree {

  _root = null

  size(node = this._root) {
    if (!node) return 0
    return node.N
  }

  get(key) {

    let _get = (node) => {

      if (null === node) return null

      if (key < node.key) return _get(node.left)
      else if (key > node.key) return _get(node.right)
      else return node.val

    }

    return _get(this._root, key)
  }

  put(key, val) {

    let _put = (node) => {
      if (null === node) return new Node(key, val, 1)

      if (key < node.key) node.left = _put(node.left)
      else if (key > node.key) node.right = _put(node.right)
      else node.val = val

      node.N = this.size(node.left) + this.size(node.right) + 1

      return node
    }

    this._root = _put(this._root)
  }

}

let bst = new BinarySearchTree()

assert.equal(bst.get('a'), null)
bst.put('a', '1')
assert.equal(bst.get('a'), '1')
bst.put('e', '2')
assert.equal(bst.get('e'), '2')
bst.put('b', '3')
assert.equal(bst.get('a'), '1')
assert.equal(bst.get('b'), '3')
bst.put('b', '5')
bst.put('d', '6')
bst.put('f', '7')
bst.put('c', '8')
assert.equal(bst.get('d'), '6')
assert.equal(bst._root.left, null)
assert.equal(bst._root.right.key, 'e')
assert.equal(bst._root.right.right.key, 'f')
assert.equal(bst._root.right.left.key, 'b')
assert.equal(bst._root.right.left.right.key, 'd')
assert.equal(bst._root.right.left.right.left.key, 'c')
