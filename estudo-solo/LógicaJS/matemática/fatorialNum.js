/**
 * 12)
 13) 
Faça um algoritmo que calcule o fatorial de um número.
 */

function fatorialDoNumero(valorDigitado) {
    let fatorial = 1;

    if(valorDigitado < 0 ) {
        console.log("O valor informado não tem fatorial definido pois é negativo")
        return undefined
    } else if(valorDigitado === 0) {
        console.log('O fatorial de 0 é: 1')
        return 1
    } else {    
            for (let i = 1; i <= valorDigitado ; i++) {
            fatorial = fatorial * i
    }
        console.log(`O valor do fatorial de ${valorDigitado} é: ${fatorial}`)
    }

    return fatorial
}

console.log(fatorialDoNumero(10))