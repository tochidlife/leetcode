let dp = []

const knapsack = (W, w, v, n) => {
  if (!W || !n) {
    return 0
  }
  if (dp[n]) {
    console.log('dp: ', n)
    return dp[n]
  }
  if (w[n - 1] > W) {
    return knapsack(W, w, v, n - 1)
  } else {
    dp[n] = Math.max(
      v[n - 1] + knapsack(W - w[n - 1], w, v, n - 1),
      knapsack(W, w, v, n - 1)
    )
    return dp[n]
  }
}

const v = [17, 90, 20, 50, 10, 200]
const w = [10, 9, 4, 2, 1, 20]
const W = 50
const n = v.length
console.log('knapsack total value: ', knapsack(W, w, v, n))
