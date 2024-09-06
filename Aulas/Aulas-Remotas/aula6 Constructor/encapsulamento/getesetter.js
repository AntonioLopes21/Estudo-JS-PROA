class ContaBancaria {
    #saldo

    construtor(saldoInicial) {
        this.#saldo = saldoInicial
    }

    depositar(valor) {
        this.#saldo += valor
    }

    getSaldo() {
        return this.#saldo
    }

    set saldo(novoSaldo) {
        if(novoSaldo < 0) {
            console.log("O saldo não pode ser negativado")
        } else {
            this.#saldo = novoSaldo
        }
    }
 }

 const minhaConta = new ContaBancaria(1000)
 minhaConta.depositar(500)

 //# antes da variavel para mostrar que é privado
//  console.log(minhaConta.#saldo)
console.log(minhaConta.getSaldo())

minhaConta.saldo = 2000
console.log(minhaConta.getSaldo())

minhaConta.saldo = -500
console.log()

minhaConta.saldo = 400
console.log(minhaConta.getSaldo())