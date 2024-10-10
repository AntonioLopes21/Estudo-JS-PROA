/**
 * REDUCE
 * 
 */

//quando é preciso encontrar um valor
//com base em todo elemento do array

const foguetes = [ 
    {pais: "Russia", lancamentos: 32},
    {pais: "Us", lancamentos:321},
    {pais: "Brasil", lancamentos: 21},
    {pais: "Japão", lancamentos: 100}
]

const totalLancamentos = foguetes.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.lancamentos, 0)

console.log("Total de lançamentos: " + totalLancamentos)

