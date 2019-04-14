/**
 * @name UnionFind6 并查集
 * @deprecated 第六版
 * 基于第五版；使用递归路径压缩，一次性全部指向根节点
 * 因为使用了递归，性能反而变差了
 * 而第五版的非递归路径压缩，多次使用后也能变成所有的子节点都指向根节点
 */
class UnionFind6 {
  constructor(size) {
    this.parent = []
    // this.sz = [] // this.sz[i] 表示以 i 为根的集合中的元素个数
    this.rank = [] // this.rank[i] 表示以 i 为根的集合中所表示树的层数，不是具体的数的层数的值，只一个泛值

    // 初始化, 每一个节点指向自己, 没有合并的元素
    // 每一个节点的没有子节点，只有它本身层数为 1
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }

  getSize() {
    return this.parent.length
  }

  // 查找元素 p 所对应的集合编号
  // O(h) 复杂度
  _find(p) {
    if (p < 0 && p >= id.length) {
      throw new Error('p is out of bound.')
    }
    // while => if
    if (p != this.parent[p]) {
      // this.parent[p] = this.parent[this.parent[p]] // 非递归路径压缩，一行代码
      // p = this.parent[p]
      this.parent[p] = this._find(this.parent[p]) // 使用递归的路径压缩，一次性都指向根节点
    }
    // return p
    return this.parent[p] // 返回 parent[p]
  }

  // 查看元素 p 和元素 q 是否所属一个集合
  // O(h) 复杂度，h 为树的高度
  isConnected(p, q) {
    return this._find(p) === this._find(q)
  }

  // 合并元素 p 和元素 q 所属的集合
  // O(n) 复杂度，h 为树的高度
  unionElements(p, q) {
    const pRoot = this._find(p)
    const qRoot = this._find(q)

    if (pRoot === qRoot) {
      return
    }

    // 根据两个元素所在树的 rank 不同判断合并方向
    // 将 rank 低的集合合并到 rank 高的集合上
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      // this.rank[qRoot] <= this.rank[qRoot]
      this.parent[qRoot] = pRoot
      this.rank[pRoot] += 1 // 此处需要维护 rank
    }
  }
}

module.exports = UnionFind6