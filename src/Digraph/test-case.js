'use strict'


let assert = require('assert')
    , Digraph = require('./index')
    , DirectedDFS = require('./directedDFS')

    , testData = [['4', '2']
    , ['2', '3']
    , ['3', '2']
    , ['6', '0']
    , ['0', '1']
    , ['2', '0']
    , ['11', '12']
    , ['12', '9']
    , ['9', '10']
    , ['9', '11']
    , ['8', '9']
    , ['10', '12']
    , ['11', '4']
    , ['4', '3']
    , ['3', '5']
    , ['7', '8']
    , ['8', '7']
    , ['5', '4']
    , ['0', '5']
    , ['6', '4']
    , ['6', '9']
    , ['7', '6']]

// 测试单点可达
function test1() {
    let G = new Digraph()

    testData.forEach(d => G.addEdge(d[0], d[1]))
    assert.deepStrictEqual(G.V(), 13)
    assert.deepStrictEqual(G.E(), 22)

    let D1 = new DirectedDFS(G, '1')
        , D2 = new DirectedDFS(G, '2')

    assert.deepStrictEqual(D1.marked('1'), true)
    assert.deepStrictEqual(D1.marked(1), false)

    ~~['0', '1', '2', '3', '4', '5'].forEach(v => {
        assert.deepStrictEqual(D2.marked(v), true)
    })


}


// 测试多点可达
function test2() {

    let G = new Digraph()

    testData.forEach(d => G.addEdge(d[0], d[1]))

    let D = new DirectedDFS(G, ['1', '2', '6'])

    ~~['0', '1', '2', '3', '4', '5', '6', '9', '10', '11', '12'].forEach(v => {
        assert.deepStrictEqual(D.marked(v), true)
    })
}


test1()
test2()

console.log('如果看到这里，恭喜你，测试全过了')