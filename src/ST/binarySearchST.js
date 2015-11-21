/**
 * Created by zwhu on 15/11/21.
 * 二分查找(基于符号表)
 */
import assert from 'assert'

let less = (a, b) => {
  return a < b
}

// 基于有序数组的二分查找, (迭代)
let rank = (key, keys) => {
  let lo = 0
    , hi = keys.length - 1
    , mid

  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2)
    if (less(keys[mid], key)) lo = mid + 1
    else if (less(keys[key], key)) hi = mid - 1
    else return mid
  }

  return lo

}

//TODO: 基于有序数据的二分查找, (递归)
let rank2;


class BinarySearchST {
  _keys = []
  _vals = []
  _N    = 0

  size() {
    return this._N
  }

  isEmpty() {
    return this._N === 0
  }

  get(key) {
    let {_keys : keys, _vals : vals, _N: N} = this

    if (this.isEmpty()) return null

    let i = rank(key, keys)
    if (i < N && keys[i] === key) {
      return vals[i]
    }

    return null
  }

  put(key, val) {
    let {_keys : keys, _vals : vals, _N: N} = this
      , i = rank(key, keys)

    // 如果存在则替换
    if (i < N && keys[i] === key) {
      vals[i] = val
      return
    }

    this._keys = [...keys.slice(0, i), key, ...keys.slice(i + 1)]
    this._vals = [...vals.slice(0, i), val, ...vals.slice(i + 1)]
    this._N++

  }

  delete(key) {
    let {_keys : keys, _vals : vals, _N: N} = this
      , i = rank(key, keys)

    // 如果存在则替换
    if (i < N && keys[i] === key) {
      this._keys = [...keys.slice(0, i), ...keys.slice(i + 1)]
      this._vals = [...vals.slice(0, i), ...vals.slice(i + 1)]
      this._N++
    }
  }

  keys() {
    return this._keys
  }

}


let st = new BinarySearchST()

assert.equal(st.get('a'), null)
st.put('a', '1')
assert.equal(st.get('a'), '1')
st.put('b', '2')
assert.equal(st.get('b'), '2')
st.put('b', '3')
assert.equal(st.get('a'), '1')
assert.equal(st.get('b'), '3')
assert.deepEqual(st.keys(), ['a', 'b'])
st.delete('b')
assert.equal(st.get('b'), null)
assert.equal(st.get('a'), 1)
st.put('b', '3')
st.delete('a')
assert.equal(st.get('a'), null)
