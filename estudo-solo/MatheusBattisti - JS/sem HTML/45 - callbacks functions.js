//funções de callback

//programação ssincrona do callback

function exibir(num) {
    console.log(`A operação resultou em: ${num}`)
}


const soma = (num1, num2, callback) => {
    let operacao = num1 + num2;
    callback(operacao);
}

function multiplicacao(num1, num2, cb) {
    let multiplicacao = num1*num2;

    cb(multiplicacao)
}

soma(2,2, exibir)
multiplicacao(3,2, exibir)

