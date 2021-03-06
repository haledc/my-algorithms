import LinkedList from "../linked-list/linked-list";

/**
 * @name LinkedListSet 集合
 * @description 使用链表实现 ES6 的 Set 集合
 */
export default class LinkedListSet<T> {
  list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  // 获取集合的元素个数 O(1)
  get size(): number {
    return this.list.size;
  }

  // 添加元素 O(N)
  add(val: T): this {
    if (!this.has(val)) {
      this.list.addFirst(val); // O(1)
    }
    return this;
  }

  // 查询元素是否存在 O(N)
  has(val: T): boolean {
    return this.list.contains(val);
  }

  // 删除元素 O(N)
  delete(val: T): boolean {
    return this.list.removeKey(val);
  }

  clear(): void {
    this.list = new LinkedList();
  }
}
