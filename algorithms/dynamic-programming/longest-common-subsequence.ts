// 最长公共子序列 lcs (longest common subsequence) (动态规划版本)
// 最长子序列是指，在两个字符串序列中以相同顺序出现，
// 但不要求连续（非字符串子串）的字符串序列。

export function lcs(wordX: string, wordY: string): number {
  const m = wordX.length;
  const n = wordY.length;
  const dp: number[][] = Array.from(new Array(m + 1), () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    // console.log(dp[i].join());
  }
  return dp[m][n];
}
