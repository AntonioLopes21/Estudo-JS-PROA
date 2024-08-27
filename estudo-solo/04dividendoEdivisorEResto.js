/**
 *  
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
e o resto da divisão destes dois valores.

 */

function divisaoEresto(a, b) {

    let divisao = a/b
    let resto = a % b

    let resultado = `${a} / ${b} = ${divisao} e o resto é ${resto}`

    return resultado
}

console.log(divisaoEresto(5,2))