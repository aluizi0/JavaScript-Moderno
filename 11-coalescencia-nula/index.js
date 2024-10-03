let a = 0
let b = a || 1

console.log({a, b}) // 1

b = a ?? 42

console.log({a, b}) // 0

let c = undefined ?? 42 // ignorar valores que dao nulo ou undefined

console.log({c}) // 42