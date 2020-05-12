/**
 * 
 * 题目#004：二进制运算
 * 
 * 输入一个整数，输出该数二进制中表示1的个数。其中负数用补码表示。
 * 
 * @tips
 * 提示：先复习二进制的位运算
 * 
 */



// 二进制通过&(与)和位移的运算，不断左移，只要不为0肯定就是1，并进行统计
function checkBinaryOf1(b) {
  let flag = 1
  let count = 0
  let path = []
  while(flag) {
    if(b & flag) {
      ++count
      path.push(1)
    } else {
      path.push(0)
    }
    flag = flag << 1
  }
  return {count:count, path:path.reverse()}
}

const result = checkBinaryOf1(148)
console.log(result.count, result.path.join(''))