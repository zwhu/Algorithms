/**
 * Created by zwhu on 15/10/31.
 * 生成随机数组
 */
//
let rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start)

let randomArray1 = (start, end) => {
  let range = rangeArray(start, end)
    , random = []
    , N = range.length


  while (N--) {
    let i = Math.random() * (N + 1) | 0
    random.push(range[i])
    range[i] = range[N]
    //range.splice(i, 1)
  }
  return random
}

let randomArray2 = (start, end) => {
  let o = {}
    , length = end - start + 1
    , random = []
  while (random.length < length) {
    let i = (Math.random() * length + 1) | 0
    if (o[i]) continue
    else {
      o[i] = true
      random.push(i)
    }

  }
  return random
}

//console.time('random1')
//let random1 = randomArray1(1, 1e5)
//console.timeEnd('random1')
//console.time('random2')
//let random2 = randomArray2(1, 1e5)
//console.timeEnd('random2')
export {
  randomArray1 as randomArray
}