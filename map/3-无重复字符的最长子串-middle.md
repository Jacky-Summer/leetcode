## 题目描述

给定一个字符串，请你找出其中不含有重复字符的   最长子串   的长度。

示例  1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是  "wke"，所以其长度为 3。

请注意，你的答案必须是 子串 的长度，"pwke"  是一个子序列，不是子串。

## 题解

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0
  let res = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      l = map.get(s[i]) + 1
    }
    map.set(s[i], i)
    res = Math.max(res, i - l + 1)
  }
  return res
}
```
