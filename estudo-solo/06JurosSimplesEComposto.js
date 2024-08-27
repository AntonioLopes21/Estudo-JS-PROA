/**
 * )
 Elabore duas funções que recebem três parâmetros: capital inicial
 , taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira
 sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. 
 */

function jurosSimples(valor, juros, tempo) {
    
    let valorDoJuros = valor * juros * tempo
    let montante = valor + valorDoJuros

    return `O valor do juros simples é: ${montante.toFixed(2)}`
}

const jurosCompostos = (valor, juros, tempo) => {
    
    let valorJurosMontante = valor * (1 + juros) **tempo
    return `O montante com juros compostos é: ${valorJurosMontante.toFixed(2)}`
}

console.log(jurosSimples(1000, 0.10, 30))
console.log(jurosCompostos(1000, 0.10, 30))