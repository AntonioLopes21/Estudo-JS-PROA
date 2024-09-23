class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }

    printNameFunction() {
        setTimeout(function()  {
            this.nome = "forofa"
            console.log(this.nome)
        },1000)
    }

    printNameArrowFunction() {
        setTimeout(() => {
            console.log(this.nome)
        }, 1000);
    }
}




const p1 = new Pessoa("HumptyDumpty")
p1.printNameFunction()
p1.printNameArrowFunction()


