# 回溯

## 回溯套用公式

> 道理都懂：就是挑一个位置放 -> 满足就继续挑 -> 不满足就退回上一步

```js
function backtrack(...arguments) {
  // 1. 满足条件 return
  if (xxx) {
    // 满足了 咋整
    // return
  }

  //2. 剩余情况继续找
  for (let i = 0; i < n; i++) {
    // 3. 需要的地方枝解（就是跳过循环的意思）
    if (枝解条件) continue;

    // 4. 满足情况操作
    // 操作【例如 push / 增加字符串末位 / 哈希表修改值】
    // 5. 进行相应操作后继续递归寻找
    backtrack(...arguments);
    // 回溯（退回上级操作）
    // 与第 4 步相反【例如 pop / 删除字符串末位 / 哈希表修回值】
  }
}
```
