/**
 * ESCREVA UM PROGRAMA QUE GERE UM NUMERO
 * ALEATORIO ENTRE 1 E 100 E QUE DÊ DICAS AO USER
 * SE A RESPOSTA ESTÁ PARA MENOS OU PARA MAIS
 */

function geradorNumeroAleatorio ()  {
    return Math.floor(Math.random() * 100) + 1
   
}

function adivinhaNumero() {
    const numAleatorio = geradorNumeroAleatorio()
    let resposta

    alert("Que os jogos comecem")

     do {

        resposta = parseInt(prompt("Digite um número entre 1 e 100:"), 10)


    if(resposta > numAleatorio) {
       
        alert("A resposta está mais para baixo")
    
    } else if(resposta < numAleatorio) {
       
        alert("A resposta está mais para cima")
    
    } else {

        alert("Acertou MIZERAVI")
    
    }
} while(resposta != numAleatorio)
}

adivinhaNumero()
