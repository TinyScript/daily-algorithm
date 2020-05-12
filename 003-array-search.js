/**
 * 
 * 题目#003：排序数组查找
 * 
 * 统计一个数字在排好序的数组中出现的次数
 * 
 * 提示：本题有多种解法，试着分析哪种解法更好
 * 
 */

const arr = [1,1,2,3,4,5,6,6,6,6,6,6,6,7,8,9,10,12,13,15,17]

// 遍历查找
// function arraySearch(arr, n) {
//   let count = 0
//   for(let i = 0, len = arr.length - 1; i < len; i++) {
//     if(arr[i] === n) count++
//   }
//   return count
// }

// 二分法查找
function getCount(arr, v) {
  const len = arr.length-1
  const first = getFirstIndex(arr, v, 0, len)
  const last = getLastIndex(arr, v, 0, len)
  if(last !== -1 && first !== -1) {
    return last - first + 1
  }
  return 0
}

// 二分法往前查
function getFirstIndex(arr, v, first, last) {
  if(first > last) {
    return -1
  }
  const mid = Math.floor((first + last)/2)
  if(arr[mid] === v) {
    if(arr[mid - 1] !== v) return mid
    return getFirstIndex(arr, v, first, mid - 1)
  } else if(arr[mid] > v) {
    return getFirstIndex(arr, v, first, mid - 1)
  } else if(arr[mid] < v) {
    return getFirstIndex(arr, v, mid + 1, last)
  }
}
// 二分法往后查
function getLastIndex(arr, v, first, last) {
  if(first > last) {
    return -1
  }
  const mid = Math.floor((first + last)/2)
  if(arr[mid] === v) {
    if(arr[mid + 1] !== v) return mid
    return getLastIndex(arr, v, mid + 1, last)
  } else if(arr[mid] > v) {
    return getLastIndex(arr, v, first, mid - 1)
  } else if(arr[mid] < v) {
    return getLastIndex(arr, v, mid + 1, last)
  }
}

// const result = binarySearch(arr, 6)
const result = getCount(arr, 6)
console.log(result)


// 二分法基础
// function binarySearch(arr, value, start, end) {
//   start = start || 0
//   end = end || arr.length - 1
//   const mid = Math.floor(end/2)
//   if(arr[mid] === value) {
//     return mid
//   } else if(arr[mid] < value) {
//     return arraySearch(arr, value, start, mid - 1)
//   } else {
//     return arraySearch(arr, value, mid + 1, end)
//   }
// }