//numero aleatório

const adivinhaNum = valor => {
    let numAleatorio = Math.floor(Math.random()*100) + 1
    

   
    do {
        valor = prompt("Digite um número: ")
        
        if(valor >= 0 && valor <=100 || !valor) {

        if(valor != numAleatorio && valor < numAleatorio) {
            console.log("Mais para cima")
        } 
        
        if (valor != numAleatorio && valor > numAleatorio) {
            console.log("Mais para baixo")
        } 
    } else {
        console.log("Digite um número entre 0 e 100")
    }
    } while (valor != numAleatorio)
        alert("Acertou!!")
}

adivinhaNum()