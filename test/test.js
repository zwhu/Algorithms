/**
 * Created by zwhu on 15/10/16.
 */

import expect from 'expect.js'

import Stack from '../src/stack.js'
import Queue from '../src/queue.js'

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

})
