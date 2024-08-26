/**
 * ESCREVA UM PROGRAMA QUE FUNCIONE COMO UMA CALCULADORA
 * BÁSICA
 * 
 */
//para ler a linha do user
 const readLine = require('readline')

 const rl = readLine.createInterface({
     input: process.stdin,
     output: process.stdout
 })

 //para recener os valores 
function realizarOperacao(opcao, num1, num2) {
    switch (opcao) {
        case 1:
            console.log(`Adição: ${num1} + ${num2} = ${num1 + num2}`)
            break
        case 2:
            console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`)
            break
        case 3:
            console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`)
            break
        case 4:
            console.log(`Multiplicação: ${num1} x ${num2} = ${num1 * num2}`)
            break

        default:
            console.log("Opcão inválida")
    }
}

//para mostrar a questão
rl.question("Escreva uma operação\n1.Adição\n2.Subtração\n3.Divisão\n4.Multiplicação: ", (opcao) => {
    opcao = parseInt(opcao);
    //verifica as opções e entra se estiver entre 1 a 4
    if (opcao >= 1 && opcao <= 4) {
        rl.question("Digite o primeiro número: ", (num1) => {
            rl.question("Digite o segundo número: ", (num2) => {
                //comverte os valores de string para float
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                realizarOperacao(opcao, num1, num2);
                //exibe os valores que a funcao vai receber 
                //fecha o chat para o user para poupar memoria
                rl.close();
            });
        });
    } else {
        console.log("Opção inválida. Encerrando.");
        rl.close();
    }
        })
     
