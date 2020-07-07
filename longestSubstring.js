// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// const lengthOfLongestSubstring = s => {
//   x = []
//   a = Array.from(s)
//   // for (let i = 0; i < a.length; ++i) {

//   // }
//   const arr = a.reduce((acc, char) => {
//     if (!acc.includes(char)) {
//       acc.push(char)
//     }
//     return acc
//   }, x)
//   if (arr.length > 1 && arr[0] === a[0]) {
//     arr.shift()
//   }
//   return arr.join('').length
// }

const memory = {}
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let temp = ''

  for (let point = 0; point < s.length; point++) {
    const curr = s[point]
    console.log('curr', curr)
    console.log('temp before: ', temp, memory)
    if (temp.includes(curr)) {
      point = memory[curr]
      temp = ''
      console.log('temp after: ', temp)
      continue
    } else {
      console.log('curr, temp, point', curr, temp, point)
      temp = temp + curr
      memory[curr] = point
    }
    if (max < temp.length) {
      max = temp.length
    }
  }

  return max
}

console.log('output: ', lengthOfLongestSubstring('pwwkew'))
