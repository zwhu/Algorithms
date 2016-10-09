'use strict'


class KMP {

    constructor(pattern) {
        this._pattern = pattern
        this._dfa = this._kmp(pattern)
    }

    _kmp(pattern) {
        //ascii
        let ascii = 100
            , dfa = Array(ascii).fill(0).map(_ => [0])

        dfa[pattern[0].charCodeAt()][0] = 1

        for (let i = 1, X = 0; i < pattern.length; i++) {
            for (let j = 0; j < ascii; j++)
                dfa[j][i] = dfa[j][X]

            dfa[pattern[i].charCodeAt()][i] = i + 1

            X = dfa[pattern[i].charCodeAt()][X]
        }


        return dfa
    }

    search(text) {
        let index = 0
            , M = text.length
            , N = this._pattern.length

        for (let i = 0; i < M; i++) {
            index = this._dfa[text[i].charCodeAt()][index]
            if (index === N) return i + 1 - N
        }


        return -1
    }

}

module.exports = KMP