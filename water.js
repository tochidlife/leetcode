/**
 * @param {number[]} height
 * @return {number}
 */
let max = 0
var maxArea = function (height) {
  for (let i = 0; i < height.length; ++i) {
    height.forEach((h, j) => {
      const dist = Math.abs(i - j)
      const min = Math.min(h, height[i])
      const area = dist * min
      console.log('i, j, dist, min, area: ', i, j, dist, min, area)
      max = Math.max(max, area)
    })
  }
  return max
}

console.log(maxArea([1, 1]))
