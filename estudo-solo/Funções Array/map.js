/**
 * O método MAP
 */

const numeros = [1,2,3,4,5]

const dobrarValores = numeros.map(function(elemento) {
    return elemento *2
} )

console.log(dobrarValores)

const dividirValoresPorElesMesmos = numeros.map(function(valor) {
    return valor/valor
})

console.log(dividirValoresPorElesMesmos)

//converter fahreheit para celcius

const fahrenheit = [0, 32, 46, 79, 123]

const celcius = fahrenheit.map(function(valor) {
    return "Cº:" + Math.round((valor -32) * 5/9)
})

console.log(celcius)