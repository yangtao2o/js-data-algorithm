/**
 * @param {name} 二分查找
 * @param {list, item} 有序列表 需要查找的值
 */

function binarySearch (list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]
    if (guess === item) {
      return guess
    }
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return '不存在...'
}

function getMaxStepSearch (nums) {
  return `查找 ${nums}, 最多需要 ${Math.ceil(Math.log2(nums))} 步就可以查找到！`
}

export default { binarySearch, getMaxStepSearch }
