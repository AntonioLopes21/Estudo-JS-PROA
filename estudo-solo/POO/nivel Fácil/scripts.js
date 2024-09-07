class Carro {
    #marca
    #modelo

    constructor(marca, modelo) {
        this.#marca = marca
        this.#modelo = modelo
    }

    getCarro() {
        return `Marca: ${this.#marca}\nModelo: ${this.#modelo}\n`
    }

    set modeloSetter(modelo){
        const melhoresMarcas2023Top8 = ['Nissan Sentra Exclusive', 'BMW iX1', 'Ford Maverick Hybrid', 'Honda Civic e:HEV', 'Porsche Cayenne S', 'RAM Rampage R/T', 'Volkswagen ID.4', 'Ford Ranger']
        if(melhoresMarcas2023Top8.includes(modelo)) {
            this.#modelo = modelo
            console.log('Você tem um dos carros top 8 da nossa lista! me recusei a colocar um peugeot e um elétrico na lista')
            
        } else {
            console.log('Seu carro não se encontra na nossa lista dos top 8 de 2023')
        }
    }

    infoVeiculo() {
        console.log(`Seu carro é um ${this.#marca} de modelo: ${this.#modelo}`)
    }
}


const meuCarro = new Carro('Nissan', 'Nissan Sentra Exclusive')
console.log(meuCarro.getCarro())
meuCarro.infoVeiculo()

console.log("\ntentando fazer a verificação do setter")
//imprime marca e modelo
console.log("\n" + meuCarro.getCarro())
//imprimindo de acordo com o método infoveiculo
meuCarro.infoVeiculo()
//verificação do setter
meuCarro.modeloSetter = 'Nissan Sentra Exclusive'

