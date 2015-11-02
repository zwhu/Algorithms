/**
 * Created by zwhu on 15/10/30.
 */


export default class Base {

  constructor(array, cb) {
    this.__raw = array
    // clone array
    this.__display = this.__raw.slice(0)
    this.__compare = cb || this.__compare
  }

  exch(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
  }

  __compare(a, b) {
    return a < b
  }

  sort() {
  }
}

