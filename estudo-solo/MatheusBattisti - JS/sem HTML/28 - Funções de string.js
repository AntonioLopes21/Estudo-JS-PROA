//MÉTODOS DE STRING PT 1
//métodos que podem transformar

//length

let nome = 'Paulin'

console.log(nome.length)

//indexOf
console.log(nome[2])

let frase = 'Paulo é delegado'
console.log(frase)

console.log(frase.indexOf("delegado"))

//slice
let delegado = frase.slice(8, 16)
console.log(delegado)

//replace

let novaFrase = frase.replace('delegado', 'Barista')
console.log(novaFrase)