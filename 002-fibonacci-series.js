/**
 * 
 * 题目#002：斐波那契数列
 * 
 * 大家都知道斐波那契数列，现在要求输入一个正整数n，
 * 请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 * 
 * 斐波那契数列，从第3项开始等于前两项之和：
 * 0 1 1 2 3 5 8 13 ...
 * 
 * @example
 * fn(n) = f(n-1) + f(n-2)
 * 
 * @tips
 * 1、基本解法是递归，注意避免递归的缺陷
 * 2、可以试试动态规划解法
 * 3、递归、递归缓存、遍历
 */

// 递归
// function fibonacci(n) {
//   return deep(0, 1, 0, n)
// }

// function deep(n1, n2, now, n) {
//   if(n1 > Number.MAX_SAFE_INTEGER) return null
//   if(now < n) {
//     return deep(n2, n1+n2, ++now, n)
//   }
//   return n1
// }

// 动态规划
// function fibonacci(n) {
//   if(n <= 1) {
//     return n
//   }
//   var result = 0
//   var next = 1
//   var temp = null
//   var count = 0
//   while(count < n) {
//     temp = next
//     next = result + next
//     result = temp
//     count++
//   }
//   return result
// }

// 递归缓存
function fibonacci(n, memory = []) {
  if(n < 2) return n
  if(!memory[n]) {
    memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory)
  }
  return memory[n]
}

var result = fibonacci(12)
console.log(result) // 144