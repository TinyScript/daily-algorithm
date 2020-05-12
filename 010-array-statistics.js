/**
 *
 * 题目#010：数组统计
 *
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 */

/**
 * 
 * 解法1：哈希表统计次数
 * 借助哈希表，哈希表的键是数字，值是出现的次数。整体流程如下：
 * 
 * 遍历数组，统计数组出现的次数
 * 遍历哈希表，返回出现次数超过长度一半的数字
 * 
 * 注意，这里要使用 ES6 的Map，不要使用 json 对象。
 * 因为 json 对象的key存在着“隐式类型转换”，所有的key会被转换为字符串，从而导致不排查的 bug。
 * 
 * 结果：需要遍历两次，时间复杂度 O(n)，空间复杂度 O(n)
 * 
 * 代码实现：
 */
let arr = [1,2,4,3,4,5,5,5,5,5,5,5,5,5,5,5,6,7,8,9,8]
// const marjorityElement = function(nums) {
//   const map = new Map()
//   const len = nums.length - 1
//   for(let left = 0, right = len; left <= right; left++, right--) {
//     const leftK = nums[left],
//           rightK = nums[right]
//     const leftV = typeof map.get(leftK) !== 'undefined'
//                   ? map.get(leftK) + 1
//                   : 1
//     map.set(leftK, leftV)
//     if(left === right) break;
//     const rightV = typeof map.get(rightK) !== 'undefined'
//                   ? map.get(rightK) + 1
//                   : 1
//     map.set(rightK, rightV)
//   }
//   for(const key of map.keys()) {
//     if(map.get(key) > Math.floor(len / 2)) return key
//   }
//   return null
// }

/**
 * 解法2：摩尔投票算法
 * 题目说过：只可能有1个数字的出现次数超过数组长度的一半，
 * 也就是说这个数字出现总数比其他数字的出现次数总和还要多。
 * 
 * 定义变量result 和 times，第一次遍历数组的时候：
 * 
 * times === 0，那么 result 等于当前元素，times 变为 1
 * times !== 0 且 result !== 当前元素，times 减 1
 * times !== 0 且 result === 当前元素，times 加 1
 * 
 * 遍历完成后，result的值就是数组中出现次数超过一半的数字了
 * 解释：因为那个数是大于别的数次数综合，所以无论如何times都能给干到正数
 */

const result = marjorityElement(arr)
console.log(result)
