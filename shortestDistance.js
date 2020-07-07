const shortestDistance = (e, v, n) => {
  if (!n) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  let dp = Array.from(Array(n + 1), _ => Array.from(Array(n + 1).fill(Infinity)))

  for (let i = 0; i <= n; ++i) {
    dp[0][i] = 0
  }

  for (let i = 0; i <= n; ++i) {
    dp[i][0] = 0
  }

  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < n; ++j) {
      // dp[i][j] = min(dp[i][j-1], dp[i-1][j-1], v[i] - e[j] ]
      dp[i][j] = v[i] - e[j]
    }
  }
  console.log('dp: , ', dp)
}
shortestDistance([2, 5, 8, 3], [1, 3, 5, 3], 4)
