/**
 * 
 * 题目#012：求最大子序和
 * 
 * 给定一个整数数组nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 输入：[-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * 输出：6
 * 解释：连续子数组[4, -1, 2, 1]的最大和为6
 * 
 */

function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    const value = nums[i]
    // 相加小于0代表可以不算以前的值了，然后在最后一直取最大值
    if(count > 0) {
      count += value
    } else {
      count = value
    }
    max = Math.max(count, max)
  }
  return max
}

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// const result = maxSubArray([-2, -1])
console.log(result)