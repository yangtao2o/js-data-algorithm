## 字符串类

### 反转单词

题目：[557. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/submissions/)
  
```js
// 对数组进行遍历，然后每个元素进行反转

// 1
const reverseWord = (str) => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// 2 
const reverseWord = (str) => {
  return str.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// 3 match 方法让字符串和一个正则表达式进行匹配，
// 如果有 g 标识，生成一个包含所有匹配的数组
// 如果没有 g 标识，与调用 regexp.exec(string)结果一致
const reverseWord = (str) => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
```

### 计数二进制子串

题目：[696. 计数二进制子串](https://leetcode-cn.com/problems/count-binary-substrings/)
