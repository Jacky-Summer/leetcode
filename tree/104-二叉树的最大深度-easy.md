## 题目描述

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明:  叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

```
 3
/ \
 9 20
/ \
 15 7
```

返回它的最大深度  3 。

## 题解

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
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 0
  const dfs = (n, l) => {
    if (!n) return
    if (!n.left && !n.right) {
      depth = Math.max(depth, l)
    }
    dfs(n.left, l + 1)
    dfs(n.right, l + 1)
  }
  dfs(root, 1)
  return depth
}
```
