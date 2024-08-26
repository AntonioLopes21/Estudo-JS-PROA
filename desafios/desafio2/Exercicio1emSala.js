/**
 * crie um array com uma slista de nomes 
 * e faça as seguintes operações
 * 
 * 1. adicione um novo nome ao final
 * 2. remova o primeiro nome
 * 3. exiba o tamabho do array
 * 4. converta todos os nomes
 * para maiúscula
 */

let array = ["papagaio", "coelho", "formiga"]

//adicionando nome no final
console.log(array)
console.log("\n\nadicionando")
array.push("jacalé")

console.log(array)

array.shift()
console.log("\n\nremovendo do inicio")
console.log(array)

console.log("\n\n\ntamanho do array:")
console.log(array.length + " ítens na array")


let arrayMaiusculo = array.map(array => array.toUpperCase())
console.log("\n\narray maiuscula")
console.log(arrayMaiusculo)