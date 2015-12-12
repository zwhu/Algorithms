/**
 * Created by zwhu on 15/12/5.
 * 图
 */


class Graph {
  /**
   * 顶点数目
   * @type {number}
   * @private
   */
  _V = 0
  /**
   * 边的数目
   * @type {number}
   * @private
   */
  _E = 0

  /**
   * 邻接表数组
   * @type {Array}
   * @private
   */
  _adj = []

  /**
   *
   */
  constructor() {

  }

  /**
   * 顶点数目
   * @returns {number}
   */
  V() {
    return this._V
  }

  /**
   * 边的数目
   * @returns {number}
   */
  E() {
    return this._E
  }

  /**
   * 向图中增加一条边 v-w
   * @param {number} v
   * @param {number} w
   */
  addEdge(v, w) {

  }

  /**
   * 和 v 相邻的所有顶点
   * @param {number} v
   * @returns {Array}
   */
  adj(v) {
    return []
  }


}