// Complete the jumpingOnClouds function below.
function jumpingOnClouds (c) {
  if (!c || !c.length) return 0

  const nbrOfClouds = c.length
  let jumps = 0
  let skippedIndex = 0

  // [0, 0, 0, 1, 1, 0, 1]
  // MUST jump on the first cloud
  // Create a pointer, thisCloud to the firstCloud
  // for the other clouds (not first one):
  // Get next cloud (thisCloud) AND compare it with firstCloud
  // if thisCloud is the same as the firstCloud
  //    :doNothing
  // if thisCloud is NOT the same as the first Cloud
  // jump is incremented by 1
  // thisCloud becomes firstCloud

  const soFarConsecutive = (i, si) => {
    const possibleConsecutiveList = c.slice(si + 1, i)
    return possibleConsecutiveList.every(item => !item)
  }

  for (let i = 0; i < nbrOfClouds; i++) {
    const thisCloud = c[i] // 0 || 1
    if (thisCloud) {
      skippedIndex = i
    }
    if (i === 0) {
      continue
    } else {
      if (!thisCloud) {
        ++jumps
        if (!soFarConsecutive(i, skippedIndex)) {
          --jumps
        }
      }
    }
  }
  return jumps
}
