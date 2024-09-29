//exercicio 1 
//1. Dobrar os valores de um array

const numeros = [1,2,3,4,5,6,7,8]

const dobrarArrayItens = numeros.map(function(elementos) {
    return elementos * 2
})

// console.log(dobrarArrayItens)


const array = [1,2,3,4]

const dobrarArray =
    array.map(function(elementos) {
        return elementos *2
    } )


// console.log(dobrarArray)


const arrayArrow = [2,4,6,8]

const arrayArrowX2 = arrayArrow.map( element => element * 2)

// console.log(arrayArrowX2)



const arraya = [1,2,3,4]

const dobrarElementos = elementosis => elementosis * 2;

const arrayaDobrada = arraya.map(dobrarElementos)

// 


//exercicio 2
//2. Converter números para strings


const exercicio2Array = [1,2,3,4]

function converteElementoString(elementosExe2) {

    return elementosExe2.toString()

}

const arrayStringada = exercicio2Array.map(converteElementoString)

// console.log(arrayStringada)


const exe2Array = [1, 21, 32, 12]

const converteString = elementu => elementu.toString();

let exe2ArrayConvert = exe2Array.map(converteString)

// console.log(exe2ArrayConvert)

//exercicio 3
//3. Obter o comprimento de palavras

let palavras = ['mapa', 'farofa', 'piá']

let resultadoPalavra = palavras.map(palavra => palavra.length)

// console.log(resultadoPalavra)



// //exercicio 4
// Transformar objetos

const Pessoa = [
    {nome: "paulo", idade:21},
    {nome: 'luis', idade: 19},
    {nome: 'Antônio', idade: 20},
]

const PessoaComIdade = Pessoa.map(pessoa => `${pessoa.nome} ${pessoa.idade}`)

console.log(PessoaComIdade)