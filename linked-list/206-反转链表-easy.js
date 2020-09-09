/**
 * 反转一个单链表。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
  进阶:
  你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */

/**
 * 申请两个指针，第一个指针叫 pre，最初是指向 null 的。
    第二个指针 cur 指向 head，然后不断遍历 cur。
    每次迭代到 cur，都将 cur 的 next 指向 pre，然后 pre 和 cur 前进一位。
    都迭代完了(cur 变成 null 了)，pre 就是最后一个节点了。
 */
var reverseList = function (head) {
  let cur = head
  let pre = null
  while (cur) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
