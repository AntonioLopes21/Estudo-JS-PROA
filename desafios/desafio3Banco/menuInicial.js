window.onload = () => {
    let nomeUsuario = localStorage.getItem('inputName');

    if (nomeUsuario) {
        document.querySelector('#bem-vindo-texto').textContent = `Olá ${nomeUsuario}, bem-vindo ao banco Proa!`;
    } else {
        document.querySelector('#bem-vindo-texto').textContent = "Olá usuário, bem-vindo ao banco Proa!";
    }

    atualizarSaldoDisplay();
};

const saldoElement = document.querySelector('.saldoExibido');
let valorSaldo = 5000;

const atualizarSaldoDisplay = () => {
    saldoElement.textContent = `Saldo: R$${valorSaldo.toFixed(2)}`;
};

const depositarValor = () => {
    let valorDeposito = parseFloat(prompt('Digite o valor que deseja depositar: '));

    if (!isNaN(valorDeposito) && valorDeposito > 0) {
        valorSaldo += valorDeposito;
        atualizarSaldoDisplay();
        
        // Adiciona a classe de erro para alterar a cor
        saldoElement.classList.add('adicionar');

        // Remove a classe de erro após 2 segundos
        setTimeout(() => {
            saldoElement.classList.remove('adicionar');
        }, 2000);

        alert('Valor depositado com sucesso!');
    } else {
        alert('Valor inválido.');
    }
};

const sacarValor = () => {
    let valorSaque = parseFloat(prompt('Digite o valor que deseja sacar: '));

    if (!isNaN(valorSaque) && valorSaque > 0 && valorSaque <= valorSaldo) {
        valorSaldo -= valorSaque;
        atualizarSaldoDisplay();

        // Adiciona a classe de erro para alterar a cor
        saldoElement.classList.add('subtrair');

        // Remove a classe de erro após 2 segundos
        setTimeout(() => {
            saldoElement.classList.remove('subtrair');
        }, 2000);

        alert('Valor sacado com sucesso!');
    } else {
        alert('Valor inválido ou saldo insuficiente.');
    }
};


function sairSelecionar() {
    let sairOpcao = document.getElementById('sair')
    let voltar = sairOpcao.value

        alert('Obrigado e volte sempre!')
        window.location.href = 'banco.html'

}

document.getElementById('sair').addEventListener('click', sairSelecionar)
// Adiciona ouvintes de eventos aos botões
document.getElementById('depositar').addEventListener('click', depositarValor);
document.getElementById('sacar').addEventListener('click', sacarValor);
document.getElementById('saldo').addEventListener('click', () => {
    alert(`Seu saldo atual é: R$${valorSaldo.toFixed(2)}`);
});
