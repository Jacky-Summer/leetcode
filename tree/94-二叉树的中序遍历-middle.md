## 题目描述

给定一个二叉树，返回它的中序   遍历。

示例:

输入: [1,null,2,3]

```
   1
    \
     2
    /
   3
```

输出: [1,3,2]

## 题解 1

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = []
  const inorder = root => {
    if (!root) return
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
```

## 题解 2

```javascript
var inorderTraversal = function (root) {
  if (!root) return []
  const res = []
  const stack = []
  let p = root
  while (stack.length || p) {
    // 存入所有左节点
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }
  return res
}
```
