/**
 * Created by zwhu on 15/10/16.
 */

import expect from 'expect.js'

import Stack from '../stack.js'

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