/**
 * 
 * 题目#007：旋转数组的最小数字
 * 
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1
 * 
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0
 * 
 * 非 /递增排序：1,2,3,4,5,6...
 * 减 \非递减排序：1,2,2,3,4,6,7,8,8,9...
 * 
 * 非 /递减排序：9,8,7,6,5,4...
 * 增 \非递增排序：9,8,8,7,6,5,3,3,3,3...
 * 
 */

// const arr = [3,4,5,1,2]
const arr = [1,0,1,1,1]
// const arr = [2,2,3,4,5,6,6]

/**
 * 二分法遍历
 * tips：利用low + high + mid进行while循环遍历判断
 * 
 * 1. 如果中间的值相等最后的值，则慢慢向左边靠拢的取中间值
 * 2. 如果中间的值大于最后的值，就要向右边走，即向中间值右边一位开始，再向最后取中间值
 * 3. 如果中间的值小于最后的值，那就和第二点相反
 **/ 
function minRotateLow(arr) {
  const len = arr.length
  let low = 0, high = len - 1
  while(low < high) {
    const mid = Math.floor((low + high)/2)
    console.log(arr, low, mid, high)
    if(arr[mid] === arr[high]) {
      high = high - 1
    } else if(arr[mid] > arr[high]) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return arr[low]
}

// 二分法递归
function binarySearch(arr, start, end) {
  if(!arr.length) return 0
  start = start || 0
  if(end !== 0 && !end) {
    end = arr.length - 1
  }
  const mid = Math.floor((start + end)/2)
  console.log(arr, start, mid, end)
  if(start === end) return arr[start]
  if(arr[mid] > arr[end]) {
    return binarySearch(arr, mid + 1, end)
  } else if(arr[mid] === arr[end]) {
    return binarySearch(arr, start, end - 1)
  } else {
    return binarySearch(arr, start, mid)
  }
}

const result = minRotateLow(arr)
// const result = binarySearch(arr)
console.log(result)