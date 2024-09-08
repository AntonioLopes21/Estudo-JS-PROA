class Pessoa {
    nome
    // constructor(atributo) {
    //     this.atributo = atributo
    // }

    get username() {
        return this.nome
    }

    set setNome(nome) {
         if(!nome) {
             throw new error("O nome não pode ser vazio")
         }

        this.nome = nome
    }

    // verificaCaracteresEspeciais(string) {
    //     const regex = 
    // }
}

let pessoa1 = new Pessoa()
pessoa1.setNome = 'Paulin'
console.log(`Nome: ${pessoa1.username}`)

let pessoa2 = new Pessoa()
console.log(pessoa2.username)