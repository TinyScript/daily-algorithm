/**
 * 
 * 题目#001：二维数组（矩阵）查询
 * 
 * 在一个二维数组中(每个一维数组的长度相同) ，每行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * @example
 * 解题提示:二维数组是有序的，比如下面的数据:
 *
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * @tips
 * 可以直接利用左下角数字开始查找:
 * 大于:比较上移
 * 小于:比较右移
 *
 * function findNumberInMatrix(matrix, target) {
 *
 * }
 *
 */

var matrix = [
  [1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14],
  [15,16,17,18,19,20],
  [21,22,23,24,25,26,27],
  [28,29,30,31,32,33,34]
]

function findNumberInMatrix(matrix, target) {
  for(var i = matrix.length - 1; i >= 0; i--) {
    var arr = matrix[i];
    for(var j = 0; j < arr.length; j++) {
      var value = arr[j]
      if(target < value) break;
      if(target === value) return value
    }
  } 
  return null
}

var result = findNumberInMatrix(matrix, 7)

console.log(result)

