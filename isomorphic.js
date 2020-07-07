// Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t.

// For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.

// PROPOSED SOLUTION

// For each character of the first string
// If it is a key in the Memo then return the value AND compare with next string's char of same index
// Get its matching character in the next string
// And store it in the Memo like so: memo.e -> a

const isomorphic = (firstStr, nextStr) => {
  let memo = {}
  const length = firstStr.length

  for (let i = 0; i < length; i++) {
    const firstStrChar = firstStr[i]
    const nextStrChar = nextStr[i]
    const inMemo = memo[firstStrChar]
    if (inMemo) {
      console.log('--- memo logs --- ')
      console.log('memo: ', memo)
      if (inMemo !== nextStrChar) {
        return false
      }
    } else {
      memo[firstStrChar] = nextStrChar
    }
  }
  return true
}

console.log('## isomorphic: ', isomorphic('egge', 'adds'))
