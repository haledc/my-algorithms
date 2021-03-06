/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (33.55%)
 * Likes:    359
 * Dislikes: 0
 * Total Accepted:    54.7K
 * Total Submissions: 137.7K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2:
 *
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 */

// @lc code=start
// array
var spiralOrder = function (matrix: number[][]): number[] {
  const ret: number[] = [];
  if (matrix.length === 0) return ret;
  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    // 遍历矩阵外圈
    for (let c = c1; c <= c2; c++) ret.push(matrix[r1][c]); // 第一行从左到右
    for (let r = r1 + 1; r <= r2; r++) ret.push(matrix[r][c2]); // 最后一列从上到下
    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) ret.push(matrix[r2][c]); // 最后一行从右到左
      for (let r = r2; r > r1; r--) ret.push(matrix[r][c1]); // 第一列从下到上
    }
    // 继续遍历内部矩阵
    r1++;
    r2--;
    c1++;
    c2--;
  }

  return ret;
};

// array2
var spiralOrder = function (matrix: number[][]): number[] {
  const rows = matrix.length;
  const columns = matrix[0].length;
  if (!rows || !columns) {
    return [];
  }

  const visited: boolean[][] = Array.from(new Array(rows), () =>
    new Array(columns).fill(false)
  );
  const total = rows * columns;
  const ret: number[] = new Array(total).fill(0);

  let directionIndex = 0;
  let row = 0;
  let column = 0;
  const directions: [number, number][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < total; i++) {
    ret[i] = matrix[row][column];
    visited[row][column] = true;
    const newRow = row + directions[directionIndex][0];
    const newColumn = column + directions[directionIndex][1];

    if (
      !(
        0 <= newRow &&
        newRow < rows &&
        0 <= newColumn &&
        newColumn < columns &&
        !visited[newRow][newColumn]
      )
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }

  return ret;
};
// @lc code=end
