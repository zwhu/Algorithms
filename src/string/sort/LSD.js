/**
 * Created by zwhu on 15/11/28.
 * 低位排序
 *
 * 从右向左,以每个位置的字符为键进行一次排序
 * 适应于定长字符串排序
 *
 */


class LSD {

  /**
   *
   * @param a 字符串数组
   * @param W 每个元素的字符串的长度
   */
  sort(a, W) {
    const N = a.length
    const R = 256
    let aux = Array(N) // 初始化 N 次

    for (let d = W - 1; d >= 0; d--) {
      let count = Array(R + 1).fill(0)
      // 计算出现频率
      for (let i = 0; i < N; i++)
        count[a[i].charCodeAt(d) + 1]++

      // 将频率转换为索引
      for (let r = 0; r < R; r++)
        count[r + 1] += count[r]

      // 将元素分类
      for (let i = 0; i < N; i++)
        aux[count[a[i].charCodeAt(d)]++] = a[i]
      // 和下面的情况等价
      //aux[count[a[i].charCodeAt(d)]] = a[i]
      //count[a[i].charCodeAt(d)]++

      // 回写
      for (let i = 0; i < N; i++)
        a[i] = aux[i]
    }
  }
}

//EXAMPLE
var lsd = new LSD()
var a   = ['4PGC938', '2IYE230', '3CI0720', '1ICK750', '1OHV845', '4JZY524', '1ICK750', '3CI0720', '1OHV845', '1OHV845', '2RLA629', '2RLA629', '3ATW623']
lsd.sort(a, 7)

console.log(a)