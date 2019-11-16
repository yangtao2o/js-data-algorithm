## 数组类

### 电话号码组合

题目：[17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/submissions/)

描述：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

v1:

```js
export default (str) => {
  // 建立电话号码键盘映射
  const maps = ['_', '!@#', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let code = []
  if (!str.length) return code

  // '234' => [2,3,4] => ['abc', 'def', 'ghi']
  str.split('').forEach(value => {
    code.push(maps[value])
  })
  let comb = (arr) => {
    if (arr.length <= 1) {
      return arr.join('').split('')
    }
    // 临时变量保存前两个组合的结果
    let tmb = []
    // 最外层 => arr 的第一个元素，里层 => arr 的第二个元素
    for (let i = 0, l = arr[0].length; i < l; i++) {
      for (let j = 0, m = arr[1].length; j < m; j++) {
        tmb.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 关键：将组合后的数组，替换掉组合前的原始数组
    code.splice(0, 2, tmb)
    if (arr.length > 1) {
      // 递归
      comb(code)
    } else {
      return tmb
    }
    return arr[0]
  }
  return comb(code)
}
```

测试：

```js
import telComb from '../../code/array/lesson1'

test('telComb:2', () => {
  expect(telComb('2')).toEqual(['a', 'b', 'c'])
})

test('telComb:23', () => {
  expect(telComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('telComb:234', () => {
  expect(telComb('234')).toEqual(['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi'])
})

```