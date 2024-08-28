//numero aleatório

const adivinhaNum = valor => {
    let numAleatorio = Math.floor(Math.random()*100) + 1
    let resposta

   
    do {
        resposta = prompt("Digite um número: ")
        
        if(resposta >= 0 && resposta <=100 || !resposta) {

        if(resposta != numAleatorio && resposta < numAleatorio) {
            console.log("Mais para cima")
        } 
        
        if (resposta != numAleatorio && resposta > numAleatorio) {
            console.log("Mais para baixo")
        } 
    } else {
        console.log("Digite um número entre 0 e 100")
    }
    } while (resposta != numAleatorio)
        alert("Acertou!!")
}

adivinhaNum()