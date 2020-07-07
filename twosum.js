
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// let twoSum = (nums, target) => {
//   let found = null
//   for (let i = 0; i < nums.length; ++i) {
//     if (found) {
//       return found
//     }
//     const rem = nums.slice(i + 1)
//     for (let j = 0; j < rem.length; j++) {
//       if ((nums[i] + rem[j]) === target) {
//         const index1 = nums.indexOf(nums[i])
//         const potentialIndex = nums.indexOf(rem[j])
//         const index2 = potentialIndex === index1 ? nums.indexOf(rem[j], index1 + 1) : potentialIndex

//         found = [index1, index2]
//         break
//       }
//     }
//   }
// }

let twoSum = (nums, target) => {
  let m = new Map()
  for (let i = 0; i < nums.length; ++i) {
    const diff = target - nums[i]
    if (m.has(nums[i])) {
      return [m.get(nums[i]), i]
    } else {
      m.set(diff, i)
    }
  }
}

console.log(twoSum([3, 3], 6))
