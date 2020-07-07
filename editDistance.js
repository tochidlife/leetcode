// Given two strings str1 and str2 and below operations that can performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.

// Insert
// Remove
// Replace
// All of the above operations are of equal cost.

// Examples:

// Input:   str1 = "geek", str2 = "gesek"
// Output:  1
// We can convert str1 into str2 by inserting a 's'.

// Input:   str1 = "cat", str2 = "cut"
// Output:  1
// We can convert str1 into str2 by replacing 'a' with 'u'.

// Input:   str1 = "sunday", str2 = "saturday"
// Output:  3
// Last three and first characters are same.  We basically
// need to convert "un" to "atur".  This can be done using
// below three operations.
// Replace 'n' with 'r', insert t, insert a

const minDistance = (word1, word2) => {
  // if(!word1.length || !word1.length) {
  //     console.log('ewo: ', len1)
  //     return 1
  // }

  if (!word1.length && !word2.length) {
    return 0
  } else if (!word1.length || !word2.length) {
    return 1
  }

  let dp = Array.from(Array(word1.length + 1), _ => Array(word2.length + 1).fill(0))

  for (let i = 0; i <= word1.length; ++i) {
    dp[0][i] = i
  }

  for (let i = 0; i <= word2.length; ++i) {
    console.log('i: ', i, dp)
    dp[i][0] = i
  }

  for (let i = 1; i <= word1.length; ++i) {
    for (let j = 1; j <= word2.length; ++j) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j])
      }
    }
  }
  // console.log('dynamic table: ', dp)
  return dp[word1.length][word2.length]
}
console.log(minDistance('a', 'ab'))
