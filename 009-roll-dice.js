/**
 * 
 * 题目#009：掷骰子
 * 
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s，
 * 输入n，打印出 s 所有可能出现的值的概率。
 * 
 * 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个概率
 * 
 */

// const toSum = function(n) {
//   const map = new Map();
//   const totalTimes = Math.pow(6, n);
//   inner(0, 1);

//   const result = [];
//   for(const times of map.values()) {
//     result.push(times / totalTimes);
//   }

//   return result;

//   function inner(total, step) {
//       // console.log(total, step)
//     if(step > n) {
//       map.set(total, map.has(total) ? map.get(total) + 1: 1);
//       return
//     }

//     for(let i = 1; i <= 6; i++) {
//       inner(total + i, step + 1)
//     }
//   }
// }

function toSum(n) {
  const result = [];
  const resultColt = {};
  everySum(0, 0);
  const totalTimes = Math.pow(6, n);

  for(let times in resultColt) {
    result.push(resultColt[times] / totalTimes)
  }

  function everySum(total, step) {
    if(step === n) {
      resultColt[total] = resultColt[total] ? resultColt[total] + 1 : 1
      return;
    }

    for(let i = 1; i <= 6; i++) {
      everySum(total + i, step + 1);
    }

  }

  return result
}

const result = toSum(2);
console.log(result);