/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (67.96%)
 * Likes:    1012
 * Dislikes: 0
 * Total Accepted:    125.4K
 * Total Submissions: 166.4K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例：
 *
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 *
 *
 */

// @lc code=start
// backtracking
var generateParenthesis = function (n: number): string[] {
  const ret: string[] = [];
  dfs("", 0, 0);
  return ret;

  function dfs(subset: string, open: number, close: number) {
    if (subset.length === n * 2) {
      ret.push(subset);
      return;
    }

    if (open < n) {
      subset += "(";
      dfs(subset, open + 1, close);
      subset = subset.slice(0, -1); // remove last char
    }

    if (open > close) {
      subset += ")";
      dfs(subset, open, close + 1);
      subset = subset.slice(0, -1);
    }
  }
};
// @lc code=end

// recursive
var generateParenthesis = function (n: number): string[] {
  const cache: string[][] = [];
  return generate(n);

  function generate(n: number): string[] {
    if (cache[n] != null) return cache[n];
    const ret = [];

    if (n === 0) {
      ret.push("");
    } else {
      for (let i = 0; i < n; i++) {
        for (const left of generate(i)) {
          for (const right of generate(n - 1 - i)) {
            ret.push("(" + left + ")" + right);
          }
        }
      }
    }

    cache[n] = ret;
    return ret;
  }
};
