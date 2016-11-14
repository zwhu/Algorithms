'use strict'

const Digraph = require('../Digraph/index')
const DirectedDFS = require('../Digraph/directedDFS')

class NFA {

    constructor(regexp) {

        let ops = []
        const M = this.__M = regexp.length
            , G = this.__G = new Digraph()  // epsilon 转换


        this.__G.addEdge(M, M + 1)

        this.__re = regexp

        for (let i = 0; i < M; i++) {
            let lp = i

            if (regexp[i] === '(' || regexp[i] === '|') {
                ops.push(i)
            } else if (regexp[i] === ')') {
                let or = ops.pop()
                if (regexp[or] === '|') {
                    lp = ops.pop()
                    G.addEdge(lp, or + 1)
                    G.addEdge(or, i)
                } else {
                    lp = or
                }
            }

            // 查看 '*' 字符
            if (i < M - 1 && regexp[i + 1] === '*') {
                G.addEdge(lp, i + 1)
                G.addEdge(i + 1, lp)
            }

            if (regexp[i] === '(' || regexp[i] === '*' || regexp[i] === ')') {
                G.addEdge(i, i + 1)
            }

        }

    }

    recognizes(txt) {

        let pc = [],
            G = this.__G,
            M = this.__M,
            re = this.__re,
            dfs = new DirectedDFS(G, 0)


        for (let v = 0; v < G.V(); v++) {
            if (dfs.marked(v)) pc.push(v)
        }

        for (let i = 0; i < txt.length; i++) {
            let match = []
            for (let j = 0; j < pc.length; j++) {
                if (pc[j] < M) {
                    if (re[pc[j]] === txt[i] || re[pc[j]] === '.') {
                        match.push(pc[j] + 1)
                    }
                }
            }

            pc = []
            dfs = new DirectedDFS(G, match)

            for (let v = 0; v < G.V(); v++) {
                if (dfs.marked(v)) {
                    pc.push(v)
                }
            }

        }

        return pc.includes(M)
    }


}


module.exports = NFA

