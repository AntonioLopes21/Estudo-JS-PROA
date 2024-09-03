/**
 * 10) 
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false. 
 */

const ehDivisivelPor3 = (valorDigitado) => {
    let numero = 3;
    let solucao = true;

    if(valorDigitado % numero == 0) {
        console.log("O valor " + valorDigitado + " é divisível por 3 " + solucao)
    } else {
        solucao = false
        console.log("O valor "+ valorDigitado +" não é divisível por 3 " + solucao)
    }

    return solucao
}

console.log(ehDivisivelPor3(3))

//avaliação GPT

// O que está correto:
// Verificação da Divisibilidade: A condição valorDigitado % numero == 0 corretamente verifica se valorDigitado é divisível por numero (que é 3).

// Retorno Correto: A função retorna true ou false baseado na verificação, o que está correto.

// Mensagens de Log: As mensagens de log informam corretamente se o valor é divisível por 3 ou não, e mostram o valor e o resultado da verificação.

// Oportunidades de Melhoria:
// Eliminação da Variável numero: Você pode diretamente usar o número 3 na verificação, sem a necessidade de criar uma variável separada para isso.

// Inicialização da Variável solucao: Inicializar solucao como true e depois definir como false se necessário pode ser simplificado. Em vez disso, calcule o valor diretamente na verificação.

// Mensagem de Log: A mensagem no log pode ser simplificada usando template strings para maior clareza e legibilidade.

// Código Melhorado
// Aqui está uma versão melhorada do seu código que mantém a mesma funcionalidade, mas é mais concisa:

// javascript
// Copiar código
// const ehDivisivelPor3 = (valorDigitado) => {
//     // Verifica se o valorDigitado é divisível por 3
//     const solucao = valorDigitado % 3 === 0;

//     // Log de mensagem para clareza
//     console.log(`O valor ${valorDigitado} ${solucao ? 'é' : 'não é'} divisível por 3`);

//     // Retorna o resultado
//     return solucao;
// }

// // Teste da função
// console.log(ehDivisivelPor3(3)); // Esperado: true
// console.log(ehDivisivelPor3(4)); // Esperado: false
// Resumo
// Seu código está correto e faz o que se propõe a fazer, mas a versão melhorada é mais direta e segue boas práticas de programação. Ambas as abordagens são válidas, mas a versão melhorada oferece um código mais limpo e eficiente.




