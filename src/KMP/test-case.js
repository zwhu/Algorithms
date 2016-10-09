'use strict'

let KMP = require('./index')
   ,assert = require('assert') 
function test1() {
    let text = 'AABBCC'
        , pattern = 'BC'
        , kmp = new KMP(pattern)
        , offset = kmp.search(text)
    assert.equal(offset, 3)
    console.log('text   :', text)
    console.log('pattern:', `${Array(offset).fill(' ').join('')}${pattern}\n`)
}

function test2() {
    let text = 'AABRAACADABRAACAADABRA'
        , pattern = 'AACAA'
        , kmp = new KMP(pattern)
        , offset = kmp.search(text)
    assert.equal(offset, 12)
    console.log('text   :', text)
    console.log('pattern:', `${Array(offset).fill(' ').join('')}${pattern}\n`)
}


test1()
test2()
