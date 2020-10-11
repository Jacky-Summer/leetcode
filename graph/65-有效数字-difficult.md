## 题目描述

验证给定的字符串是否可以解释为十进制数字。

例如:

```
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false
```

说明:  我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：

数字 0-9
指数 - "e"
正/负号 - "+"/"-"
小数点 - "."
当然，在输入中，这些字符的上下文也很重要。

## 题解

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const graph = {
    0: { digit: 6, sign: 1, '.': 2, blank: 0 },
    1: { digit: 6, '.': 2 },
    2: { digit: 3 },
    3: { digit: 3, e: 4 },
    4: { digit: 5, sign: 7 },
    5: { digit: 5 },
    6: { digit: 6, e: 4, '.': 3 },
    7: { digit: 5 },
  }
  let state = 0
  for (let c of s.trim()) {
    if (c >= '0' && c <= '9') {
      c = 'digit'
    } else if (c === ' ') {
      c = 'blank'
    } else if (c === '+' || c === '-') {
      c = 'sign'
    }

    state = graph[state][c]
    if (state === undefined) {
      return false
    }
  }
  if (state === 3 || state === 5 || state === 6) {
    return true
  }
  return false
}
```
