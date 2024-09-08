class Livro {
    #titulo
    #autor

    constructor(autor, titulo) {
        this.#autor = autor
        this.#titulo = titulo
    }

    getLivro() {
        return `Livro: ${this.#titulo}`
    }

    set livro(livro) {
       const livrosDeJoseDeAlencar = ['Iracema', 'O guarani', 'Senhora']

         if(livrosDeJoseDeAlencar.includes(livro)) {
            console.log(`o livro ${livro} se encontra na lista de livros do autor ${this.#autor}!`)
         } else {
            console.log( `O Livro ${livro} não se encontra na lista de livros de ${this.#autor}`)
         }
    }

    getAutor() {
        return `Autor: ${this.#autor}`
    }

    set autor(autor) {
        if(autor === "José de Alencar") {
            console.log('O autor foi localizado no programa')
        } else {
            console.log( `Apenas tenho informação do autor José de Alencar`)
        }
    }

    descricaoLivro() {
        return`O livro chamado ${this.#titulo} é do autor ${this.#autor}`
    }
}


const autor1 = new Livro('José de Alencar', 'Iracema')

console.log(autor1.getAutor())
console.log(autor1.getLivro())
console.log(autor1.descricaoLivro())
autor1.autor = 'José de Alencar'
autor1.livro = 'anachabarabaraba'
autor1.autor = 'Paulin'

console.log(autor1.getAutor())
console.log(autor1.getLivro())

console.log(autor1.descricaoLivro())
