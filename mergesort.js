let set = new Set()
const sort = (array = []) => {
  const size = array.length
  if (!size || size < 2) {
    return array
  }
  if (size === 2) {
    return array[0] > array[1]
      ? [array[1], array[0]]
      : array
  }
  const mid = parseInt(size / 2)
  console.log('mid - ', mid)
  return merge(sort(array.slice[0, mid]), sort(array.slice(mid)))
}

const merge = (array1 = [], array2 = []) => {
  let i = 0
  const union = [...array1, ...array2]
  while (i < union.length) {
    set.add(union[i])
    ++i
  }
}

sort([5, 2, 4, 1, 8, 0, 4, 5, 9, 2, 4, 100, 80, 300, 30])
console.log(' -- MERGESORT OUTPUT -- :', set)
