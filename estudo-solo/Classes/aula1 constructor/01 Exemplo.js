class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    ola() {
        console.log(`Olá ${this.nome}`)
    }
}

let pessoa = new Pessoa('Paulo', 22)
pessoa.ola()


