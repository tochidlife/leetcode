const codex = 'ij-dA8-weoiur-9'

console.log(codex)
const isValidChar = (char) =>
  /^[a-zA-Z]+$/.test(char)

const reverseCodex = (codex) => {
  let reversedCodex = []
  const split = codex.split('')
  const codexLength = codex.length
  let j = 0
  for (let i = codexLength - 1; i > -1; i--) {
    const currCodex = codex[i]
    const currSplit = split[j]
    const isValidCodex = isValidChar(currCodex)
    const isValidSplit = isValidChar(currSplit)

    if (i === j) continue
    if (isValidCodex && isValidSplit) {
      console.log('valid', j, i, currSplit, currCodex)
      reversedCodex[j] = currCodex
    } else if (!isValidSplit) {
      console.log('validCodex', j, i, currSplit, currCodex)
      reversedCodex[j] = currSplit
      reversedCodex[j + 1] = currCodex
      ++j
    } else if (!isValidCodex) {
      console.log('ValidSplit', i, currCodex, reversedCodex)
      reversedCodex[i] = currCodex
      --j
    }
    ++j
  }
  console.log('Reversed codex is: ', reversedCodex.join(''))
}

// call reversal: main()
reverseCodex(codex)
