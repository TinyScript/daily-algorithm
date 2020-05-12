/**
 * 
 * 题目#005：判断数值
 * 
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 
 * @example
 * 例如字符串"+100", "5e2", "-123", "3.1416"和"-1E-16"都是表示数值。
 * 但是"12e", "1a3.14", "1.2.3", "+e", "+-5"和"12e+4.3"都不是。
 * 
 * @tips
 * 提示：注意要考虑全面
 * 
 * 
 */


/**
 * 参考答案思路：
 * 
 * 1、只能出现数字、符号位、小数点、指数位
 * 2、小数点，指数符号只能出现一次，而且不能出现在开头结尾
 * 3、指数位出现后，小数位不能再出现
 * 4、符号之出现在[开头]和[指数位后面]
 */ 
function isNumeric(str) {
  if(str === undefined) return false
  let hasPoint = false
  let hasExp = false
  for(let i = 0, len = str.length; i < len; i ++) {
    const target = str[i]
    // 0-9，过
    if(target >= 0 && target <= 9) {
      continue
    } else if(target === 'e' || target === 'e') {
      // e和E
      // 之前已经出现过e、在第一个或最后一个是e，判断为非数字
      if(hasExp || i === 0 || i === len - 1) {
        return false
      }
      // 否则，e过
      hasExp = true
      continue
    } else if(target === '.') {
      // 小数点
      // 之前已经出现过e、小数点、在第一个或最后一个是小数点，判断为非数字
      if(hasExp || hasPoint || i === 0 || i === len - 1) {
        return false
      }
      // 否则，小数点过
      hasPoint = true
      continue
    } else if(target === '+' || target === '-') {
      // +和-
      // 判断第一个是符号，或者前一个是e，过
      if(i === 0 || str[i - 1] === 'e' || str[i - 1] === 'E') continue
      // 否则，判断为非数字
      return false
    } else {
      return false
    }

  }
  return true
}

/**
 * 我的答案思路：
 * 
 * 1、排除0-9，+，-，e，E，小数点以外的内容
 * 2、对小数点、e、+-符、数字的字符个数进行统计
 * 3、首先判断开头必须是0-9，如果长度大于1的字符，可以考虑判断+-开头
 * 4、对+-符超过两个进行判断
 * 5、已经有科学计数法后，后续只能是数字
 * 6、最多不超过1个e判断
 * 7、最多不超过1个小数点判断
 */
// const ADD_CODE = 43
// const SUB_CODE = 45
// const ZERO_CODE = 48
// const NINE_CODE = 57
// const e_CODE = 101
// const E_CODE = 69
// const POINT_CODE = 46

// function isNumeric(str) {
//   // 小数点
//   let pointCount = 0
//   // e
//   let exponentCount = 0
//   // 加减符号统计
//   let addSubCount = 0
//   for(let i = 0, len = str.length; i < len; i++) {
//     const s = str[i].charCodeAt(0)
//     // 排除白名单以外的内容(+,-,e,E,小数点,0-9)
//     if(
//       s !== ADD_CODE &&
//       s !== SUB_CODE &&
//       s !== e_CODE &&
//       s !== E_CODE &&
//       s !== POINT_CODE &&
//       (s > NINE_CODE || s < ZERO_CODE)
//     ) {
//       console.log(s,`错误字符: ${str[i]}`, '存在+,-,e,E,小数点,0-9以外的内容')
//       return false
//     }
//     // 开头必须是+,-或0-9判断
//     if(i === 0) {
//       // 字符串长度不唯一时，+、-判断
//       if(str.length > 1 && (s === ADD_CODE || s === SUB_CODE)) {
//         ++addSubCount
//         continue
//       }
//       if(s < ZERO_CODE || s > NINE_CODE) {
//         console.log(s,`错误字符: ${str[i]}`,'开头必须是+,-或0-9')
//         return false
//       }
//     }
//     // 不能出现两个以上的+,-符
//     if(s === ADD_CODE || s === SUB_CODE) {
//       if(addSubCount === 0) {
//         ++addSubCount
//         continue
//       }
//       console.log(s,`错误字符: ${str[i]}`,'不能出现两个以上的+,-符')
//       return false
//     }
//     // 最后一位e、E、小数点判断
//     if(
//       i === len - 1 && 
//       (s === e_CODE || s === E_CODE || s === POINT_CODE)
//     ) {
//       console.log(s,`错误字符: ${str[i]}`,'最后一位不能是e、E、小数点')
//       return false
//     }
//     // 已经有科学计数法后，后续只能是数字
//     if(exponentCount > 0) {
//       if (s < ZERO_CODE || s > NINE_CODE) {
//         console.log(s,`错误字符: ${str[i]}`,'已经是科学计数法，后续只能是数字')
//         return false
//       }
//     }
//     // 最多不超过1个e判断
//     if(s === e_CODE || s === E_CODE){
//       ++exponentCount
//       if(exponentCount > 1) {
//         console.log(s,`错误字符: ${str[i]}`,'最多不超过1个e判断')
//         return false
//       }
//       // 进入和计数法，重新计算+,-符
//       addSubCount = 0
//     }
//     // 最多不超过1个小数点判断
//     if(s === POINT_CODE) { 
//       ++pointCount
//       if(pointCount > 1) {
//         console.log(s,`错误字符: ${str[i]}`,'最多不超过1个小数点判断')
//         return false
//       }
//     }
//   }
//   return true
// }

console.log('should true:')
console.log('+100', isNumeric('+100'))
console.log('5e2', isNumeric('5e2'))
console.log('-123', isNumeric('-123'))
console.log('3.1416', isNumeric('3.1416'))
console.log('-1E-16', isNumeric('-1E-16'))

console.log('=============')

console.log('should false:')
console.log('12e', isNumeric('12e'))
console.log('1a3.14', isNumeric('1a3.14'))
console.log('1.2.3', isNumeric('1.2.3'))
console.log('+-5', isNumeric('+-5'))
console.log('12e+4.3', isNumeric('12e+4.3'))
console.log('+e', isNumeric('+e'))