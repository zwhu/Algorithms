'use strict'

class Digraph {
    constructor() {
        this._E = 0
        this._V = []
        // 如果用对象的形式没法区分以 '1' 和 1 做 key
        this._adjK = []
        this._adjV = []
    }

    isV(v) {
        return this._V.includes(v)
    }

    V() {
        return Object.keys(this._V).length
    }

    E() {
        return this._E
    }


    addEdge(v, w) {

        let index = this._adjK.indexOf(v)

        if (index > -1) {
            this._adjV[index].push(w)
        } else {
            this._adjK.push(v)
            this._adjV.push([w])
        }

        if (!this._V.includes(v))
            this._V.push(v)
        if (!this._V.includes(w))
            this._V.push(w)

        this._E++
    }

    /**
     * 由 v 指出的边所连接的所有顶点
     * @param v
     * @returns {*}
     */
    adj(v) {
        let index = this._adjK.indexOf(v)

        if (index > -1) {
            return this._adjV[index]
        } else {
            return void 0
        }

    }

    reverse() {
        let R = new Digraph()

        this._adjV.forEach((ws, index) => {
            ws.forEach(w => R.addEdge(w, this._adjK(index)))
        })

        return R
    }
}

module.exports = Digraph