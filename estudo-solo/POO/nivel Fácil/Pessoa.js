class Pessoa {
    #nome 
    #idade

    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    getNome() {
        return `Nome: ${this.#nome}`
    }

    set nome(nome) {
        if(nome.length == 0) {
            return "O nome não pode ser vazio"
        } 
    }

    getIdade() {
        return `Idade: ${this.#idade}`
    }

    set idade(novaIdade) {
        if (novaIdade < 0 || novaIdade > 150) {
            console.log(this.#nome + " você nem existe, irmão");
            return; // Impede qualquer outra ação se a idade for inválida
        }

        // Apenas para verificação e impressão de mensagens, sem atualizar #idade
        if (novaIdade <= 12) {
            console.log(this.#nome + " é uma criança");
        } else if (novaIdade < 18) {
            console.log(this.#nome + " é um adolescente");
        } else if (novaIdade <= 59) {
            console.log(this.#nome + " é um adulto");
        } else {
            console.log(this.#nome + " é um idoso.");
        }
    }


    ehAniversario(resposta) {
        console.log("você tem " +this.#idade + " por enquanto")
        console.log("você faz aniversário hoje? s ou n")
        
        if(resposta == "s") {
            this.#idade += 1
            return "parabéns! agora você tem " + this.#idade
        } else {
            return "Tranquilo. Parabéns por estar vivo"
        }
    }
    
}

const pessoa1 = new Pessoa("Paulo", 21)
console.log(pessoa1.getNome())
console.log(pessoa1.getIdade())
console.log(pessoa1.ehAniversario("s"))
pessoa1.idade = 15