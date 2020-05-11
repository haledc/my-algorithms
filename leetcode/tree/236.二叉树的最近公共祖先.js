/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (48.85%)
 * Likes:    473
 * Dislikes: 0
 * Total Accepted:    62.9K
 * Total Submissions: 102.1K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
 *
 *
 *
 *
 *
 * 示例 1:
 *
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
 *
 *
 * 示例 2:
 *
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出: 5
 * 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 *
 *
 * 说明:
 *
 *
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉树中。
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * recursive
 */
var lowestCommonAncestor = function (root, p, q) {
  let ret
  dfs(root, p, q)
  return ret

  function dfs(root, p, q) {
    if (root == null) return false
    const leftSon = dfs(root.left, p, q)
    const rightSon = dfs(root.right, p, q)

    if (
      (leftSon && rightSon) ||
      ((root.val === p.val || root.val === q.val) && (leftSon || rightSon))
    ) {
      ret = root
    }

    return leftSon || rightSon || root.val === p.val || root.val === q.val
  }
}

// save parent node
var lowestCommonAncestor = function (root, p, q) {
  const map = new Map()
  const set = new Set()

  dfs(root)

  while (p != null) {
    set.add(p.val)
    p = map.get(p.val)
  }
  while (q != null) {
    if (set.has(q.val)) {
      return q
    }
    q = map.get(q.val)
  }

  return null

  function dfs(root) {
    if (root.left != null) {
      map.set(root.left.val, root)
      dfs(root.left)
    }
    if (root.right != null) {
      map.set(root.right.val, root)
      dfs(root.right)
    }
  }
}
// @lc code=end
