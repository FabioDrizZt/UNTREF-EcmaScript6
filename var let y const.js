/* function ejemploVar() {
  // hoisting: permite que las variables se eleven en su definicion 
  console.log(x)
  var x = 10
  console.log(x)
} 

ejemploVar()
*/

/* function ejemploLet() {
  if (true) { // las variables con let tienen ambito de bloque }
    let x = 10
  }
  console.log(x)
}

ejemploLet() */

/* function ejemploConst() {
  const x = 10 // variables primitivas inmodificables
  const obj = { a: 1 }
  obj.a = 2 // si es un objeto, se puede modificar sus propiedades
  const arr = ['anana']
  arr.push('manzana') // si es un array, se puede modificar sus elementos
  arr[0] = 'banana'
  console.log({ x }, { obj }, { arr })
  // x++ No se puede modificar
}

ejemploConst() */
/* 'use strict' // Activa el modo estricto para evitar tener declaraciones de variables globales

function ejemploGlobal() {
  let miNombreCompleto
  if (true) {
    miNombreCompleto = 'Fabio D. Argañaraz' // Define globalmente o en el elemento window o global
  }
  console.log(miNombreCompleto)
}

ejemploGlobal()
// console.log(miNombreCompleto)  */
