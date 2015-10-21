/**
 * Created by zwhu on 15/10/21.
 */



export default class Iterator {

  [Symbol.iterator]() {

    let current = this.__first

    return ({
      next() {
        if (current) {
          let value = current.item
          current = current.next
          return {
            done: false,
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

  __first = null
}