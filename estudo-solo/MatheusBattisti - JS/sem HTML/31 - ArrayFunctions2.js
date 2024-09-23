/**
 * MÉTODOS DE ARRAY - PARTE 2
 */

//SPLICE
let arr = [1,2,3,4,5]

//       indice, deletar elementos? [0], elemento a adicionar
arr.splice(2, 0 ,2.5)
console.log(arr)

arr.splice(4, 1)
console.log(arr)

//indexOf
console.log(arr.indexOf(5))


//join

let array2 = ['o', 'rato', 'é', 'insano']
console.log(array2.join(" "))


//reverse
console.log(array2.reverse())