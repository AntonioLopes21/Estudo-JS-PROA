let Pessoa = {
    nome: 'Antônio',
    idade: 20,

    falar: function() {
        console.log(`Olá! meu nome é ${this.nome}`)
    }
}

console.log(Pessoa.nome)
console.log(Pessoa.idade)
Pessoa.falar()