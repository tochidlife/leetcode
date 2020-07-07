/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let median
  const n = [...nums1, ...nums2].sort(function (a, b) {
    return a - b
  })
  console.log('n array: ', n)
  const hl = n.length / 2
  if (n.length % 2 === 0) {
    median = (n[hl - 1] + n[hl]) / 2
    console.log('median % 2: ', median)
  } else {
    median = n[Math.floor(hl)]
    console.log('regular median: ', median)
  }
  return median
}

console.log('TEST: ', findMedianSortedArrays([1, 3, 4, 5, 6], [2]))
