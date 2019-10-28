function selectionSort (arr) {
  let newArr = []
  let smallest

  for (let i; i < arr.length; i++) {
    smallest = findSmallest(arr)
    newArr.append(arr.pop(smallest))
  }

  return newArr
}

function findSmallest (arr) {
  let smallest = arr[0] // 存储最小的值
  let smallestIndex = 0 // 存储最小元素的索引

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallest
}

// 递归阶乘
function fact (x) {
  if (x === 1) {
    return 1
  } else {
    return x * fact(x - 1)
  }
}

export default { selectionSort, fact }
