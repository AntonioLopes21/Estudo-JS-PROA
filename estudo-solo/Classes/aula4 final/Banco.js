class Utils {
    static configLinguagem = 'pt-br'
    static configTime = {
        hour: '2-digit',
        minute: '2-digit'
    }

    static getFormatDate() {
        let date = new Date()
        return date.toLocaleDateString(this.configLinguagem, this.configTime)
    }
}



class Conta {
    constructor(nome, numero, saldo) {
        this.nome = nome 
        this.numero = numero
        this.saldo = saldo
        this.extrato = []
    }

    get exibirExtrato() {
        console.log('---- Extrato da conta ----')

        this.extrato.forEach(item => {
            console.log(item)
        });

        console.log('---- Fim do extrato ----')
    }

    registrarExtrato(item) {
        this.extrato.push(item)
    }
} 

class ContaPoupanca extends Conta {
    #taxaDeSaque = 0.10

    saque(valor) {
        let taxaDeSaqueDeValor = valor + this.#taxaDeSaque
        let valorDeSaqueComTaxa = valor + taxaDeSaqueDeValor

        if(valorDeSaqueComTaxa > this.saldo) {
            throw new Error('Saldo insuficiente')
        }

        this.saldo = this.saldo - valorDeSaqueComTaxa
        this.registrarExtrato(`${Utils.getFormatDate()} - Saque de: ${valor} - saldo de: ${this.saldo}`)
        console.log(`O saldo atual após o saque é: ${this.saldo}`)
    }

    deposito(valor) {
        this.saldo = this.saldo + valor
        this.registrarExtrato(`${Utils.getFormatDate()} - Depósito de: ${valor} - Saldo de: ${this.saldo}`)
    }
}

let novaContaPoupanca = new ContaPoupanca('Paulin', '312', 1000)
novaContaPoupanca.saque(100)
novaContaPoupanca.saque(200)
novaContaPoupanca.deposito(500) 
novaContaPoupanca.exibirExtrato