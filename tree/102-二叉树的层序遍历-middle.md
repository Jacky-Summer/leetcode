## 题目描述

给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```javascript
;[[3], [9, 20], [15, 7]]
```

## 题解 1

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let arr = []
  let q = [[root, 0]]
  while (q.length) {
    const [n, l] = q.shift()
    if (!arr[l]) {
      arr.push([n.val])
    } else {
      arr[l].push(n.val)
    }
    if (n.left) q.push([n.left, l + 1])
    if (n.right) q.push([n.right, l + 1])
  }
  return arr
}
```

## 题解 2

```javascript
var levelOrder = function (root) {
  if (!root) return []
  let q = [root]
  const res = []
  while (q.length) {
    let len = q.length
    res.push([])
    while (len--) {
      const n = q.shift()
      res[res.length - 1].push(n.val)
      if (n.left) q.push(n.left)
      if (n.right) q.push(n.right)
    }
  }
  return res
}
```
