
const needleHaystack = (haystack, needle) => {
  if (haystack && !needle) {
    return 0
  }
  if (!haystack && !needle) {
    return 0
  }

  let match = ''
  let found = []

  for (let i = 0; i < haystack.length; ++i) {
    const hay = haystack[i]

    match += hay
    if (match === needle) {
      console.log('matched: ', match, i)
      found.push(i + 1 - match.length)
      match = ''
    } else {
      // if (!firstIndex && needle.includes(hay)) {

      // }
      if (match.length === needle.length) {
        match = ''
      } else {
        console.log('what happens here: ?', match, i)
      }
    }
  }
  console.log('found: ', found)
  return found.length ? found[0] : -1
}

const haystack = ''
const needle = ''

console.log(needleHaystack(haystack, needle))
