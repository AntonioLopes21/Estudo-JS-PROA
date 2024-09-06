
class Carro {
    #carro
    #modelo 
    #ano

    constructor(carro, modelo, ano) {
        this.#carro = carro
        this.#modelo = modelo
        this.#ano = ano
    }

    getCarro() {
        return this.#carro +", " + this.#modelo +', ' + this.#ano
    }

    set ano(ano) {
        if(ano < 2015) {
            console.log("O carro é antigo")
        } else {
            this.#carro = ano
        }

    }
}

const meuCarro = new Carro('Mercedes', 'Benz', 1970)


console.log(meuCarro.getCarro())