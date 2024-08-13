// Spread Operator '...'

// The spread operator is a feature in JavaScript that allows an iterable such as an array to be expanded

const arr1 = ['rojo', 'azul', 'naranja']
const arr2 = ['marron', 'verde', ['amarillo', 'fucsia']]
const copiaArr1 = arr1 // Se copia la referencia a Memoria
const copiaArr2 = [...arr2] // Se copian solo los valores
copiaArr1.push('dorado')
console.log({ arr1 })
console.log({ copiaArr1 })
copiaArr2.push('dorado')
console.log({ arr2 })
console.log({ copiaArr2 })

const combinacion = [...arr1, ...arr2]
console.log(combinacion)

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const obj3 = { ...obj1, c: obj2.c }
console.log(obj3)

let a = '1'
let b = '2'
;[a, b] = [b, a]

console.log({ a, b })
