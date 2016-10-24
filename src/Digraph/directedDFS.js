'use strict'

class DirectedDFS {
    constructor(G, s) {
        this._marked = []
        //单点可达
        if (!Array.isArray(s))
            this._dfs(G, s)
        // 多点可达
        else {
            s.forEach(w => {
                if (!this.marked(w))
                    this._dfs(G, w)
            })
        }
    }

    _dfs(G, v) {
        if(!G.isV(v))
            throw new Error('别犯傻, 这个顶点都不存在')

        this._marked.push(v)

        ~~(G.adj(v) || []).forEach(w => {
            if (!this.marked(w))
                this._dfs(G, w)
        })

    }

    marked(v) {
        return this._marked.includes(v)
    }

}

module.exports = DirectedDFS