/**
 * 写一个 RecentCounter 类来计算最近的请求。

  它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。

  返回从 3000 毫秒前到现在的 ping 数。

  任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。

  保证每次对 ping 的调用都使用比之前更大的 t 值。

   
  示例：

  输入：inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
  输出：[null,1,2,3,3]
   

  提示：

  每个测试用例最多调用 10000 次 ping。
  每个测试用例会使用严格递增的 t 值来调用 ping。
  每次调用 ping 都有 1 <= t <= 10^9。
 
*/

/**
 * 题目分析：
 * 
 * 说是有个构造函数, 也就是它说的类, 其中有个方法ping, 它会传入个参数时间 t
  在这个时间 的 过去 3 秒 内, 有个喇叭ping个不停, 求在这个3秒内这个喇叭 ping了多少下
  所以现在构造函数里先定义个 数组 用来 存放 ping时候 的 时间, 每ping一下 就存ping的时间, 超过3秒的 就把超过的删了,
  题目说返回ping的数 , 那咱就返回 这个数组的长度就行了, 毕竟每ping一下 都往数组里存了个元素, 他的长度就是ping的数.
 */

var RecentCounter = function () {
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
