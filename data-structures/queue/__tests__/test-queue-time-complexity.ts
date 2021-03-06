import ArrayQueue from "../array-queue";
import ObjectQueue from "../object-queue";
import LinkedListQueue from "../linked-list-queue";

/**
 * 测试队列的时间复杂度方法
 * ArrayQueue ObjectQueue 和 LinkedListQueue 入列的时间时间复杂度都为 O(1)，差别不大
 * 但是，ArrayQueue 出列的时间复杂度为 O(N)，因为数组结构的元素出列后，后面所有的元素都需要往前移动一个位置
 * ObjectQueue 和 LinkedListQueue 出列的时间复杂度为 O(1)，不需要移动元素
 * 两者出列时为不同级别的时间复杂度，差别巨大
 */
function testTimeComplexity(name: string, queue: any, opCount: number) {
  const label = `${name} time`;

  console.time(label);

  for (let i = 0; i < opCount; i++) {
    queue.enqueue(
      Math.min(Math.floor(Math.random() * opCount), Number.MAX_VALUE)
    );
  }

  for (let i = 0; i < opCount; i++) {
    queue.dequeue();
  }

  console.timeEnd(label);
}

// const opCount = 100000 // 10 万级别个数
const opCount = 200000; // 20 万级别个数

const arrayQueue = new ArrayQueue();
testTimeComplexity("arrayQueue", arrayQueue, opCount);

const objectQueue = new ObjectQueue();
testTimeComplexity("objectQueue", objectQueue, opCount);

const linkedListQueue = new LinkedListQueue();
testTimeComplexity("linkedListQueue", linkedListQueue, opCount);
