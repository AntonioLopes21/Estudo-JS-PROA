//criamos e definimos a array numeros aqui
const numeros = [0,1,2,3,4,5,6,7,8,9,10]
//abaixo a função que vai pegar a array

const multiplicarPares = (array) => {
    //criou uma outra função que vai receber os 
    //novos parâmetros
    let resultado = []

    //contador para cada item na array 
    /**
     * verifica o tamanho da array e até atingir 
     * vai incrementar
     */
    for (let i = 0; i < array.length; i++) {
        
        //aqui verifica se na posição o resto é zero
        //ou seja par
        //se for vai adicionar o número e multiplicar por  2
        if(array[i] %2 === 0) {
            resultado.push(array[i] * 2)
        }
    }

    return resultado
}

console.log(multiplicarPares(numeros))