'use strict'

const NFA = require('./index')


let data = ['AC', 'AD', 'AAA', 'ABD', 'ACD', 'BCD', 'AAABD','ABCCBD', 'BABAAA', 'BABBAAA']
    , nfa = new NFA('(A*B|AC)D')


data.forEach(v => {
    console.log(v + ':    ' + nfa.recognizes(v))
})

