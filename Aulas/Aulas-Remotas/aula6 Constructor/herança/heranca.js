class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome
        this.idade = idade
        this.especie = especie
    }

     info() {
         console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nEspécie: ${this.especie} `)
         
     }

    correr() {
        console.log(`${this.nome} corre muito`)
    }

    falar() {
        console.log(`${this.nome} fala bem`)
    }

    dormir() {
        console.log(`${this.nome} está dormindo agora...`)
    }
}

class Cachorro extends Animal {
    
    constructor(nome, idade, raca) {
        super(nome, idade, 'Cachorro')
        this.raca = raca
    }
    
    latir() {
        console.log(`${this.nome} late para krl de madrugada`)
    }

    info() {
        super.info()
        console.log(`${this.nome} é um ${this.especie} `)
    }

    
}

const meuDog = new Cachorro('Rex', 3, 'Cachorro')
meuDog.latir()
meuDog.correr()
meuDog.info()
