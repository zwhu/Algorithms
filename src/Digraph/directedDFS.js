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