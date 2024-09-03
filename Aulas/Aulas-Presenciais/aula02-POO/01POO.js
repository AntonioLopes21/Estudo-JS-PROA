class Carro {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    detalhes() {
        return `${this.marca} ${this.modelo}`
    }
    

}



const meuCarro = new Carro('Toyota', 'Corolla')
console.log(meuCarro.detalhes())

const carro2 = new Carro('Ford', 'KA')
console.log(carro2.detalhes())



class Profissao{
    constructor(nome, idade, profissao) {
        this.nome = nome 
        this.idade = idade
        this.profissao = profissao
    }

    apresentacao() {
        return   `Olá, meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`
    
    }
}


const minhaProfissao = new Profissao ('Paulo', 21, 'Programador')

console.log(minhaProfissao.apresentacao())