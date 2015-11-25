/**
 * Created by zwhu on 15/11/24.
 */

class Node {
  key
  val
  color
  N
  left  = null
  right = null

  constructor(key, val, N, color) {
    this.key   = key
    this.val   = val
    this.N     = N
    this.color = color
  }
}

const BLACK = false
  , RED     = true


class RedBlackBST {
  root = null

  _isRed(node) {
    if (null == node) return BLACK
    return RED === node.color
  }

  _rotateLeft(h) {
    let x   = h.right
    h.right = x.left
    x.left  = h
    x.color = h.color
    h.color = RED
    x.N     = h.N
    h.N     = 1 + this.size(h.left) + this.size(h.right)
    return x
  }

  _rotateRight(h) {
    let x   = h.left
    h.left  = x.right
    x.right = h
    x.color = h.color
    h.color = RED
    x.N     = h.N
    h.N     = 1 + this.size(h.left) + this.size(h.right)
    return x
  }

  _flipColors(h) {
    h.color       = RED
    h.left.color  = BLACK
    h.right.color = BLACK
  }

  size(node) {
    if (undefined === node) return this.size(this.root)

    if (null == node) return 0

    return node.N
  }

  put(key, val) {

    let {_isRed, _rotateLeft, _rotateRight, _flipColors, size} = this

    let _put = (h) => {

      if (null === h) return new h(key, val, 1, BLACK)

      if (h < h.key) h.left = _put(h.left)
      else if (h > h.key) h.right = _put(h.right)
      else h.val = val

      if (_isRed(h.right) && !_isRed(h.left)) h = _rotateLeft(h)
      if (_isRed(h) && _isRed(h.left.left)) h = _rotateRight(h)
      if (_isRed(h.left) && _isRed(h.right))  _flipColors(h)

      h.N = size(h.left) + size(h.right) + 1

      return h
    }

    this.root = _put(this.root)
  }

  get(key) {
    let _get = (h) => {

      if(null === h) return null

      if (h < h.key) return _get(h.left)
      else if (h > h.key) return _get(h.right)
      else return h.val

    }

    return _get(this.root)


  }

}