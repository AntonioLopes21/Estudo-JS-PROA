function calculadora(num1, num2, escolha) {

    let adicao = num1 + num2
    let subtracao = num1 - num2
    let divisao = num1 / num2
    let multiplicar = num1*num2

    let resposta = ""

    console.log("1 - Adição\n2 - multiplicação\n3 - Multiplicação\n4 - Divisão")

    switch(escolha) {
        case 1: 
        resposta =  "resultado da adição de dois números: " + num1 + " + "+ num2+ " = " +adicao
        break

        case 2: 
        resposta = "resultado da subtração de dois números: " + num1 + " - "+ num2+ " = " +subtracao
        break

        case 3: 
        resposta = "resultado da multiplicação de dois números: " + num1 + " x "+ num2+ " = " +multiplicar
        break

        case 4: 

        if(num2 != 0) {
        resposta = "resultado da divisão de dois números: " +  + num1 + " / "+ num2+ " = " +divisao
        } else {
            resposta = "Divisão por zero jamais será aceita"
        }
        break

    }

    return resposta
    //return armazena na função
}

console.log(calculadora(2,2,4))


//const ler = require('readline-sync)
//const ler = ler.question("Insira um numero")
//const num1 = parseInt(ler.question("insira o numero"))

//para rodar no terminal tem que usar node + nome do arquivo