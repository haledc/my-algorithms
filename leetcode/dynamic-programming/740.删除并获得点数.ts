/*
 * @lc app=leetcode.cn id=740 lang=typescript
 *
 * [740] 删除并获得点数
 *
 * https://leetcode-cn.com/problems/delete-and-earn/description/
 *
 * algorithms
 * Medium (54.35%)
 * Likes:    301
 * Dislikes: 0
 * Total Accepted:    24K
 * Total Submissions: 39.8K
 * Testcase Example:  '[3,4,2]'
 *
 * 给你一个整数数组 nums ，你可以对它进行一些操作。
 *
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i]
 * + 1 的元素。
 *
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,4,2]
 * 输出：6
 * 解释：
 * 删除 4 获得 4 个点数，因此 3 也被删除。
 * 之后，删除 2 获得 2 个点数。总共获得 6 个点数。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,3,3,3,4]
 * 输出：9
 * 解释：
 * 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
 * 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
 * 总共获得 9 个点数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
function deleteAndEarn(nums: number[]): number {
  let max = 0;
  for (const num of nums) {
    max = Math.max(max, num);
  }
  const sum: number[] = new Array(max + 1).fill(0);
  for (const num of nums) {
    sum[num] += num;
  }
  return rob(sum);

  // leetcode 198
  function rob(nums: number[]): number {
    const n = nums.length;
    const dp: number[] = new Array(n + 2).fill(0);

    for (let i = n - 1; i >= 0; i--) {
      dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
    }

    return dp[0];
  }
}
// @lc code=end
