/**
 * Created by zwhu on 15/10/16.
 */

import expect from 'expect.js'

import Stack from '../src/stack.js'
import Queue from '../src/queue.js'
import Bag from '../src/bag.js'

describe('base', () => {

  describe('stack', () => {

    let stack, str = 'Hello'
    before(() => {
      stack = new Stack()
    })
    after(() => {
      stack = null
    })

    it('push', () => {
      str.split('').forEach(v => stack.push(v))
      expect(stack.size()).to.be(5)
    })

    it('pop', () => {
      while (!stack.isEmpty()) {
        expect(stack.pop()).to.be(str[stack.size()])
      }
      expect(stack.size()).to.be(0)
    })
  })

  describe('queue', () => {

    let queue, str = 'Hello'
    before(() => {
      queue = new Queue()
    })
    after(() => {
      queue = null
    })

    it('enqueue', () => {
      str.split('').forEach(v => queue.enqueue(v))
      expect(queue.size()).to.be(5)
    })

    it('dequeue', () => {
      while (!queue.isEmpty()) {
        expect(queue.dequeue()).to.be(str[str.length - 1 - queue.size()])
      }
      expect(queue.size()).to.be(0)
    })
  })

  describe('bag', () => {

    let bag, str = 'Hello'
    before(() => {
      bag = new Bag()
    })
    after(() => {
      bag = null
    })

    it('add', () => {
      str.split('').forEach(v => bag.add(v))
      expect(bag.size()).to.be(5)
    })

    it('iterator', () => {
      let index = 0
      for(let v of bag) {
        index++
        expect(v).to.be(str[str.length - index])
      }

      expect(bag.size()).to.be(5)
    })
  })

})
