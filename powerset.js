const powerset = (n = '') => {
  const s = Array.from(n)
  const result = s.reduce((prev, element) => {
    const pe = prev.map(el => `${el}${element}`)
    return [...prev, ...pe]
  }, [''])
  return result
}

console.log('POWERSET OUTPUT : ', powerset('This'))
