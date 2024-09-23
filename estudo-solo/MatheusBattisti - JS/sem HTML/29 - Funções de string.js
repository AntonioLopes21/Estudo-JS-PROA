//Funções de String parte 2
//métodos que podem modificar => alterar característica
//e contexto




//toUpperCase e toLowerCase

let frase = "Essa é a frase que será manipulada"

console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log('\n')

//trim -> dados de user no formulário

let nome = '         Paulin         '

let nomeTrim = nome.trim()
console.log(nome)
console.log(nomeTrim + "\n")


//split -> transformar texto em uma array ou array em texto

console.log(frase.split(' '))

let tags = 'PHP, JS, HTML, CSS'
console.log(tags.split(', '))

//l.astIndexOf

let frasinha = "palavra teste e a ultima palavra teste"
console.log(frasinha.indexOf('teste'))
console.log(frasinha.lastIndexOf("teste"))