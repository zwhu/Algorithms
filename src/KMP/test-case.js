'use strict'

let KMP = require('./index')

function test1() {
    let text = 'AABBCC'
        , pattern = 'BC'
        , kmp = new KMP(pattern)
        , offset = kmp.search(text)
    console.log('offset :', offset)
    console.log('text   :', text)
    console.log('pattern:', `${Array(offset).fill(' ').join('')}${pattern}\n`)
}

function test2() {
    let text = 'AABRAACADABRAACAADABRA'
        , pattern = 'AACAA'
        , kmp = new KMP(pattern)
        , offset = kmp.search(text)
    console.log('offset :', offset)
    console.log('text   :', text)
    console.log('pattern:', `${Array(offset).fill(' ').join('')}${pattern}\n`)
}


test1()
test2()
