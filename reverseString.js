/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

let currIndex = 0
const reverseString = s => {
  const lastIndex = s.length - 1 - currIndex

  const first = s[currIndex]
  const last = s[lastIndex]
  if (currIndex === lastIndex - 1 || lastIndex === currIndex) {
    return s
  } else {
    s[currIndex] = last
    s[lastIndex] = first

    ++currIndex
    return reverseString(s)
  }
}

console.log('reversal: ', reverseString(['H', 'a', 'n', 'n', 'a', 'h', 'boy', 'clap']))
