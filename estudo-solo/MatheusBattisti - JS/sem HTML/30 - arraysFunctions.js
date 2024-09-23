//Funções de arrays


/**
 * REMOÇÃO E ADIÇÃO DE ELEMENTOS
 */

//length
let array = [1,2,3,4,5,67,7]
console.log(array.length)

//push => adiciona ao fim
array.push(4,5,7)
console.log(array)

//pop
array.pop()
console.log(array)

// unshift => começo do array
array.unshift(0)
console.log(array)

//shift => remove começo
array.shift()
console.log(array)

/**
 * COMO ACESSAR O ULTIMO ELEMENTO
 */
console.log("Ultimo elemento da array: "+array[array.length - 1])

//isArray
console.log(Array.isArray(array))
console.log(Array.isArray(4))