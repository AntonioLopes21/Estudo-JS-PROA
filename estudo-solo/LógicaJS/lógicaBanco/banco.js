const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 5000;
let usuario = '';
const senhaFixa = 3333;

function depositarValor() {
    rl.question("Digite o valor que deseja depositar na sua conta: ", valorDeposito => {
        valorDeposito = parseFloat(valorDeposito);

        if (!isNaN(valorDeposito) && valorDeposito > 0) {
            saldo += valorDeposito;
            console.log("Depósito realizado com sucesso! O dinheiro está na sua conta!");
        } else {
            console.log("Valor inválido para depósito.");
        }

        dentroBanco();
    });
}

function sacarValor() {
    rl.question("Digite o valor do saque: ", valorSaque => {
        valorSaque = parseFloat(valorSaque);

        if (!isNaN(valorSaque) && valorSaque > 0) {
            if (valorSaque <= saldo) {
                saldo -= valorSaque;
                console.log("Saque efetuado com sucesso.");
            } else {
                console.log("Saldo insuficiente.");
            }
        } else {
            console.log("Valor inválido para saque.");
        }

        dentroBanco();
    });
}

function exibirSaldo() {
    console.log(`O seu saldo é ${saldo}`);
    dentroBanco();
}

function entrarBanco() {
    rl.question("Bem-vindo! Digite o seu nome de usuário: ", nomeUsuario => {
        usuario = nomeUsuario;

        if (usuario.length === 0 || usuario.length > 10) {
            console.log('O usuário não pode ser vazio ou passar de 10 caracteres.');
            return entrarBanco(); // Recomeça o processo de login
        }

        rl.question("Agora digite a senha para login: ", senha => {
            if (senha == 0) {
                console.log("Digite algo para a senha.");
                return entrarBanco(); // Recomeça o processo de login
            }

            if (parseInt(senha) !== senhaFixa) {
                console.log('Senha incorreta. Digite 3333 para logar.');
                return entrarBanco(); // Recomeça o processo de login
            }

            console.log('Usuário aceito');
            dentroBanco();
        });
    });
}

function dentroBanco() {
    rl.question(`Olá ${usuario}, como você está hoje?\nAgora digite 1-4 para selecionar o que deseja fazer:\n1. Sacar\n2. Saldo\n3. Depósito na conta\n4. Sair do programa\n`, opcao => {
        switch (opcao) {
            case '1':
                console.log('Opção: saque');
                sacarValor();
                break;

            case '2':
                console.log('Opção: saldo');
                exibirSaldo();
                break;

            case '3':
                console.log('Opção: depósito na conta');
                depositarValor();
                break;

            case '4':
                console.log("Obrigado e volte sempre.");
                rl.close();
                break;

            default:
                console.log('Essa opção não existe.');
                dentroBanco(); // Permite escolher outra opção
                break;
        }
    });
}

// Inicia o processo de login
entrarBanco();
