// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

const rotate = (nums, cut) => {
  let k = cut
  const numsLength = nums.length

  if (k > numsLength) {
    k = k % numsLength
  }

  let newNums = []

  for (let i = 0; i < k; i++) {
    newNums[i] = nums[numsLength - k + i]
  }

  console.log('for1: ', newNums)

  let newCut = numsLength - k - 1
  for (let i = 0; i <= newCut; i++) {
    newNums[newCut + i] = nums[i]
  }

  console.log('for2: ', newNums)

  return newNums
}

console.log('rotate: ', rotate([1, 2, 3, 4, 5, 6, 7], 3))
