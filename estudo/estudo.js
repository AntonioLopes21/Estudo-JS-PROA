const readline = require('readline'); // Importa o módulo readline

// Cria uma interface para ler e escrever no console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Faz uma pergunta ao usuário
rl.question('Qual é o seu nome? ', (name) => {
    console.log(`Olá, ${name}!`);
    rl.close(); // Fecha a interface após a resposta
});
