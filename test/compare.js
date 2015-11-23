import Quick from '../src/sort/quick'
import {randomArray as random} from '../randomarray'


let array  = random(0, 50000000)
  , array1 = array.slice(0)
  , array2 = array.slice(0)

console.time('quick sort')
let q = new Quick(array1)
q.sort()
console.timeEnd('quick sort')

console.time('sort')
array2.sort((a, b)=>a - b)
console.timeEnd('sort')