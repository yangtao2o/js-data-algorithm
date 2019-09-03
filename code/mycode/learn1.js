// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法
var twoSum = function (nums, target) {
  var len = nums.length
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (nums[j] == target - nums[i]) {
        return [i, j]
      } else {
        throw new Error('No two sum solution')
      }
    }
  }
}
var nums = [2, 8, 11, 15]

var target = 9
twoSum(nums, target)

// 回文数
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString() === x.toString().split('').reverse().join('')
}

// 1/2
function palindrome (str) {
  var re = /[\W_]/g

  var lowRegStr = str.toLowerCase().replace(re, '')
  for (var i = 0, l = lowRegStr.length; i < l / 2; i++) {
    if (lowRegStr[i] != lowRegStr[l - 1 - i]) {
      return false
    }
  }
  return true
}

isPalindrome('121')
