class Pessoa {
    constructor(nome, telefone, email) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

    andar() {
        console.log(`${this.nome} está andando`)
    }
}

    class PessoaFisica extends Pessoa {
    constructor(nome, telefone, email, cpf) {
        super(nome, telefone, email)
        
        this.cpf = cpf
    }
}

    class PessoaJuridica extends Pessoa {
        constructor(nome, telefone, email, cnpj) {
            super(nome, telefone, email)
            
            this.cnpj = cnpj
        }
            pagarSalarios() {
                console.log(`${this.nome} paga os salários`)

            }
        }
    

        let pessoa1 = new Pessoa()
        
        pessoa1.nome = 'Paulin'
        pessoa1.email = 'Paulin@email'
        pessoa1.telefone = 123456

        pessoa1.falar()
        pessoa1.andar()

        let pessoaFisica1 = new PessoaFisica()
        pessoaFisica1.nome = 'Luis'
        pessoaFisica1.email = 'Luis.email'
        pessoaFisica1.telefone = 1234566
        pessoaFisica1.cpf = 'cpf: 1244532123'

        console.log(pessoaFisica1.nome)
        console.log(pessoaFisica1.email)
        console.log(pessoaFisica1.telefone)
        console.log(pessoaFisica1.cpf)
        pessoaFisica1.andar()
        pessoaFisica1.falar()

        let pessoaJuridica1 = new PessoaJuridica()
        pessoaJuridica1.nome = 'arthur'
        pessoaJuridica1.email = 'arthur.email'
        pessoaJuridica1.telefone = 1234566
        pessoaJuridica1.cpf = 'CNPJ: 1244532123'

        console.log(pessoaJuridica1.nome)
        console.log(pessoaJuridica1.email)
        console.log(pessoaJuridica1.telefone)
        console.log(pessoaJuridica1.cpf)
        pessoaJuridica1.andar()
        pessoaJuridica1.falar()
        pessoaJuridica1.pagarSalarios()



