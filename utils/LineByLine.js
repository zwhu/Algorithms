/**
 * Created by zwhu on 15/12/11.
 */

import {createReadStream} from 'fs'
import {createInterface, clearScreenDown} from 'readline'
import {join} from 'path'

let readFile = (inputFile, cb) => {
  let inStream = createReadStream(inputFile, 'utf8')
    , rl       = createInterface({input: inStream})

  rl.on('line', function (line) {
    rl.pause()
    //sync
    cb(line)
    rl.resume()
  })
}
readFile(join(__dirname, '../src/Graph/tinyG.txt'), (line)=> {
  console.log(line)
})

export default readFile
