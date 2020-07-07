const fib = n => {
  let memo = [1, 1]
  if (!n || n <= 2) {
    return 1
  }
  let i = 2
  while (i <= n) {
    memo[i] = memo[i - 1] + memo[i - 2]
    console.log('memo: ', memo)
    ++i
  }
  return memo[n]
}

console.log('Fibonacci Test: ', fib(10))
