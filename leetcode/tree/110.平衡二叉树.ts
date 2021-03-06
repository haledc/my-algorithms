/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (45.89%)
 * Likes:    284
 * Dislikes: 0
 * Total Accepted:    64.9K
 * Total Submissions: 127.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 *
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 *
 *
 * 示例 1:
 *
 * 给定二叉树 [3,9,20,null,null,15,7]
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回 true 。
 *
 * 示例 2:
 *
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 *
 *
 * 返回 false 。
 *
 *
 *
 */

export {};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
// recursive top-down
var isBalanced = function (root: TreeNode | null): boolean {
  if (!root) return true;
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );

  // the height of node
  function height(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
  }
};

// recursive bottom-up
var isBalanced = function (root: TreeNode | null): boolean {
  return height(root) >= 0;

  function height(root: TreeNode | null): number {
    if (!root) return 0;
    const leftHeight = height(root.left);
    const rightHight = height(root.right);
    if (
      leftHeight === -1 ||
      rightHight === -1 ||
      Math.abs(leftHeight - rightHight) > 1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHight) + 1;
    }
  }
};
// @lc code=end
