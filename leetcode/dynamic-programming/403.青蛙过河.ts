/*
 * @lc app=leetcode.cn id=403 lang=typescript
 *
 * [403] 青蛙过河
 *
 * https://leetcode-cn.com/problems/frog-jump/description/
 *
 * algorithms
 * Hard (42.14%)
 * Likes:    218
 * Dislikes: 0
 * Total Accepted:    20.3K
 * Total Submissions: 48.1K
 * Testcase Example:  '[0,1,3,5,6,8,12,17]'
 *
 * 一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。
 *
 * 给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。
 *
 * 开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。
 *
 * 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。
 * 另请注意，青蛙只能向前方（终点的方向）跳跃。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：stones = [0,1,3,5,6,8,12,17]
 * 输出：true
 * 解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子,
 * 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。
 *
 * 示例 2：
 *
 *
 * 输入：stones = [0,1,2,3,4,8,9,11]
 * 输出：false
 * 解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * 0
 * stones[0] == 0
 *
 *
 */

// @lc code=start
// dp
function canCross(stones: number[]): boolean {
  const n = stones.length;
  // dp[i][k] -> 表示青蛙能否达到「现在所处的石子编号」为 i 且「上一次跳跃距离」为 k 的状态。
  const dp: boolean[][] = Array.from(new Array(n), () =>
    new Array(n).fill(false)
  );
  dp[0][0] = true;

  for (let i = 1; i < n; i++) {
    if (stones[i] - stones[i - 1] > i) {
      return false;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const k = stones[i] - stones[j];
      if (k > j + 1) {
        break;
      }
      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
      if (i === n - 1 && dp[i][k]) {
        return true;
      }
    }
  }

  return false;
}
// @lc code=end
