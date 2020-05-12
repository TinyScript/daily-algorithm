/**
 * 
 * 题目#006：字符串排列
 * 
 * 输入一个字符串，按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc，则打印出由字符串a，b，c所排列出来的所有字符串
 * 
 * 如：abc、acb、bac、bca、cab、cba
 * 
 * 思路：
 * 使用回溯法
 * · 记录一个字符（temp），用于存储当前需要进入排列的字符
 * · 记录一个字符串（current），用于存储当前已经排列好的字符
 * · 记录一个队列（queue），用于存储未被排列的字符
 * 
 * 1. 每次将temp添加到current
 * 2. 如果queue为空，则本次排列完成，将current添加到结果的数组中，结束递归
 *    如果queue不为空，说明还存在未排列的字符
 * 3. 递归排列queue中剩余的字符
 * 
 * 重点：从根部往头部计算，也就是从最后往前算，基本只能利用递归的方式进行回溯；
 *      或者使用遍历，然后利用变量进行逐级深入，再用一个path记录路径，方便回溯
 * 
 * 类似深度优先遍历的思路。
 */

const str = 'abcd'

/**
 * 递归分治法，把东西都拆成多个层级进行累加
 * 通过递归找到最后一位进行回溯循环累加，每次循环都更换一次字符串的位置
 * 然后每层递归都保留当前被抽离出来的字符串进行累加，并且继续循环剩下数组中的字符。
 */
// function permutation(str) {
//   const arr = str.split('')
//   const result = []
//   permutate(arr,result)
//   return result
// }

// function permutate(queue, result, temp = '', current = '') {
//   current += temp
//   if(queue.length === 0) {
//     result.push(current)
//     return
//   }
//   for(var i = 0, len = queue.length; i < len; i++) {
//     const temp = queue.shift()
//     permutate(queue, result, temp, current)
//     queue.push(temp)
//   }
// }


/**
 * 递归字符串替换法
 * 通过swap函数不断进行字符串替换，也是递归到最后一位进行操作
 * 与上面方法不同的是，这种方法无需新建字符串变量进行统计，只负责操作数组即可
 */
function permutation(str) {
  const result = []
  if(!str) return result
  const queue = str.split('')
  permutate(queue, 0, result)
  return result
}

function permutate(queue, index, result) {
  if(index === queue.length - 1) {
    result.push(queue.join(''))
    return
  }
  // 第一轮递归，i是0,1,2,3，所以得到的是abcd，然后再慢慢向上执行，类似汉诺塔的操作
  for(let i = index; i < queue.length; i++) {
    swap(queue, index, i)
    permutate(queue, index + 1, result)
    swap(queue, i, index)
  }
}

function swap(queue, pre, next) {
  let temp = queue[pre]
  queue[pre] = queue[next]
  queue[next] = temp
}

const result = permutation(str)
console.log(result)