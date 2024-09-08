class MinhaClasse {
    constructor(atributo) {
        this.atributo = atributo
    }

    get obterAtributo() {
        return this.atributo
    }

    set definirAtributo(valor) {
        this.atributo = valor
    }
}

let exemplo = new MinhaClasse('teste')
console.log(exemplo.obterAtributo)

exemplo.definirAtributo = 'teste 123'
console.log(exemplo.obterAtributo)