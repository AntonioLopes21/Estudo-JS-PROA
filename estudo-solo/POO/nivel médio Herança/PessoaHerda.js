class Pessoa  {
    #nome 
    #idade

    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    
    apresentacao() {
        return `Olá! Me chamo ${this.#nome} e tenho ${this.#idade} anos de idade`
    }
}

class Estudante extends Pessoa {

    constructor(nome, idade) {
        super(nome, idade)
        
    }

    apresentacao() {
        const apresentacaoPai = super.apresentacao()
        return `${apresentacaoPai} e sou estudante`
    }
}


const estudante1 = new Estudante("Carlos", 21)
const pessoa1 = new Pessoa("Paulin",21)

console.log(estudante1.apresentacao())
console.log(pessoa1.apresentacao())