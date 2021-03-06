/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (48.99%)
 * Likes:    113
 * Dislikes: 0
 * Total Accepted:    9.8K
 * Total Submissions: 19.6K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 *
 * 示例:
 *
 *
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 *
 * 说明:
 *
 *
 * 给定数组的长度不会超过15。
 * 数组中的整数范围是 [-100,100]。
 * 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 *
 *
 */

// @lc code=start
// backtracking
function findSubsequences(nums: number[]): number[][] {
  const ret: number[][] = [];
  const subset: number[] = [];

  dfs(0, -Infinity);
  return ret;

  function dfs(cur: number, last: number) {
    if (cur === nums.length) {
      if (subset.length >= 2) {
        ret.push(subset.slice());
      }
      return;
    }

    if (nums[cur] >= last) {
      subset.push(nums[cur]);
      dfs(cur + 1, nums[cur]);
      subset.pop();
    }

    if (nums[cur] !== last) {
      dfs(cur + 1, last);
    }
  }
}
// @lc code=end
