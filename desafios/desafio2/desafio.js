//desafio 1 
/*
    Escreva um programa que faça uma contagem regressiva de 10 até 1 e exiba 
    "feliz ano novo!" no final.
*/

let contadorRegressivo = 10;

for (contadorRegressivo; contadorRegressivo >= 1; contadorRegressivo--) {
    console.log(contadorRegressivo)

    if (contadorRegressivo == 1) {
        console.log("Feliz Ano Novo!")
    }
}

//desafio concluido

//desafio 2 
/*
    Escreva um programa que some todos os números pares de 1 a 20
     e exiba o resultado
*/

let numerosPares = 0;

for (numerosPares % 2 == 0; numerosPares <= 20; numerosPares += 2) {

    let resultado = numerosPares + numerosPares;
    console.log(numerosPares)

    if (numerosPares == 20) {
        console.log("soma dos números pares: " + resultado)
    }
}

//para finalizar ainda esse 2

/*Escreva um programa que exiba
 a tabuada de um número dado (por exemplo, 7), de 1 a 10.
*/

let contador = 0;
for (contador; contador <= 10; contador ++) {
    let numeroDaTabuada = 5

    let resultado = numeroDaTabuada * contador
    console.log(numeroDaTabuada + " X " + contador + " = " + resultado)
}

//finalizado

//Escreva um programa que conte o número de vogais de uma String
let nomes = "abacaxi"

let contador1;

for(contador1; contador1 <= nomes.length; contador1 ++) {
    if(contador1 == "a" || contador1 == "e" || contador1 == "i" || contador1 == "o" || contador1 == "u") {
        contador1 ++;
        let resultado = contador1.length
        console.log("Número de vogais: " + resultado)
    } 
}

//para fazer


//Escreva um programa que exiba todos os números impares de 1 a 20 usando 
//o laço while





/**
 * Escreva um programa que some os dígitos de um número inteiro( por exemplo)
 * 1234 -> 1+2+3+4 = 10
 */


/**
 * Escreva um programa que exiba todas as propriedades e valores de um objeto
 * 
 * let pessoa = {nome: "Joao", idade: 30, cidade ="São paulo"}
 */

