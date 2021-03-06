/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续1的个数
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (57.09%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    85.4K
 * Total Submissions: 144K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 *
 * 示例 1:
 *
 *
 * 输入: [1,1,0,1,1,1]
 * 输出: 3
 * 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 *
 *
 * 注意：
 *
 *
 * 输入的数组只包含 0 和1。
 * 输入数组的长度是正整数，且不超过 10,000。
 *
 *
 */

// @lc code=start
// array
function findMaxConsecutiveOnes(nums: number[]): number {
  let ret = 0;
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      ret = Math.max(ret, count);
      count = 0;
    }
  }

  ret = Math.max(ret, count);
  return ret;
}
// @lc code=end
