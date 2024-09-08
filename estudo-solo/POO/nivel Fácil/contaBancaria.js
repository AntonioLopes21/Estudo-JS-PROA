class ContaBancaria {
    #numeroConta
    #saldo
    #usuario

    constructor(numeroConta, saldo, usuario) {
        this.#numeroConta = numeroConta
        this.#saldo = saldo
        this.#usuario = usuario
    }

    getNumeroConta() {
        return `O numero da conta é ${this.#numeroConta}`
    }

    set numeroConta(numeroConta) {
        if(numeroConta != this.#numeroConta) {
            console.log(`A conta ${numeroConta} não está cadastrada no sistema.\nacesse ${this.#numeroConta}`)
        } else {
            console.log('Bem vindo ' + this.#usuario)
        }
    }

    getSaldo() {
        return `Você tem um saldo de: ${this.#saldo}`
    }

    set saldo(saldo) {
        if(saldo > 0) {
            console.log(`você tem um dinheirinho na conta ainda: ${saldo}`)
        } else if (saldo == 0) {
            console.log(`Mano... não tem nem como comprar uma paçoquinha. Seu saldo: ${saldo}`)
        } else if(saldo < 0) {
            console.log("isso nem existe kkkkkk operação negativado... alô serasa")
        }
    }

    getUsuario() {
        return `nome:${this.#usuario}  da conta ${this.#numeroConta}`
    }

    exibirInfo() {
        console.log(`Olá ${this.#usuario} da conta: ${this.#numeroConta} com um saldo de: ${this.#saldo}`)
    }
}

const usuario1  = new ContaBancaria('123456', 2999, 'Paulin')

console.log(usuario1.getNumeroConta())
console.log(usuario1.getSaldo())
console.log(usuario1.getUsuario())

console.log('\n')
usuario1.exibirInfo()