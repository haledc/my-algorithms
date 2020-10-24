/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 *
 * https://leetcode-cn.com/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (39.82%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    16.1K
 * Total Submissions: 40.1K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 *
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 *
 *
 *
 * 示例 1：
 *
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 *
 *
 * 示例 2：
 *
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 *
 *
 * 示例 3：
 *
 * 输入：name = "leelee", typed = "lleeelee"
 * 输出：true
 *
 *
 * 示例 4：
 *
 * 输入：name = "laiden", typed = "laiden"
 * 输出：true
 * 解释：长按名字中的字符并不是必要的。
 *
 *
 *
 *
 * 提示：
 *
 *
 * name.length <= 1000
 * typed.length <= 1000
 * name 和 typed 的字符都是小写字母。
 *
 *
 *
 *
 *
 *
 */

import { type } from "os";

// @lc code=start
// traverse
var isLongPressedName = function (name: string, typed: string): boolean {
  const nameArr = name.split("");
  const typedArr = typed.split("");
  for (let i = 0; i < Math.max(nameArr.length, typedArr.length); i++) {
    if (nameArr[i] !== typedArr[i]) {
      if (typedArr[i] === typedArr[i - 1]) {
        typedArr.splice(i, 1);
        i--;
      } else {
        return false;
      }
    }
  }
  return true;
};

// two pointers
var isLongPressedName = function (name: string, typed: string): boolean {
  let i = 0;
  let j = 0;

  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
    } else {
      return false;
    }
  }

  return i === name.length; // if match all the char of name
};
// @lc code=end
