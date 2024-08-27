/**
 * 01)
 Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.
 */

const subtrairEDividir = (a, b) => {
    let subtracao = a - b
    let divisao = a / b

    return `O valor dos dois números subtraidos é ${a} - ${b} = ${subtracao}\nO valor da divisão é ${a} / ${b} = ${divisao}`
}

console.log(subtrairEDividir(2,2))