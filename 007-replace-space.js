/**
 * 
 * 题目#007：替换空格
 * 
 * 请实现一个函数，将一个字符串中每个空格替换成"%20"。
 * 例如，当字符串为“We Are Happy”，则经过替换之后的字符串为We%20Are%20Happy
 * 
 * 要求：不准用正则和内置函数！
 * 
 */

function encodeSpace(str) {
  let len = str.length
  let emptyNum = 0
  let strNum = 0
  // 计算空格字符
  for(let i = 0; i < len; i++) {
    if(str[i] === ' ') {
      ++emptyNum
      continue
    }
    ++strNum
  }

  // 通过空格字符，使用两个指针变量控制strArr与str
  const length = emptyNum * 3 + strNum
  const strArr = new Array(length)
  for(let i = 0, j = 0; i < length; j++) {
    if(str[j] === ' ') {
      strArr[i++] = '%'
      strArr[i++] = '2'
      strArr[i++] = '0'
      continue
    }
    strArr[i++] = str[j]
  }
  return strArr.join('')
}

const result = encodeSpace('We Are Happy')
console.log(result)