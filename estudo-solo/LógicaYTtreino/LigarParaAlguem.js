/**
 * monte um algorítmo necessário para ligar para um amigo
 */

class Amigo {
    #nome
    #telefone


    
    constructor(nome, telefone) {
        this.#nome = nome
        this.#telefone = telefone
    }

    getNome() {
        return `Nome do usuário: ${this.#nome}`
    }

    set nome(nomePessoa) {
        const nomeAmigosCadastrados = ['Paulin', 'Vagner', 'Antônio', 'Pacheco']
        if(nomeAmigosCadastrados.contains(nomePessoa)) {
            ligar()
        }
    }

    getTelefone() {
        return `telefone ${this.#telefone} pertence a ${this.#nome}`
    }

    set telefone(numero) {
        const nomeAmigosCadastrados = ['Paulin', 'Vagner', 'Antônio', 'Pacheco']
        const numerosCadastrados = [123, 321, 132, 213]
        
        const amigosMap = new Map()

        for(let i = 0; i < nomeAmigosCadastrados.length; i++) {
            amigosMap.set(nomeAmigosCadastrados[i], numerosCadastrados[i])
        }

        console.log(amigosMap)

        if(nomeAmigosCadastrados.contains(numerosCadastrados)) {
            ligando()
        }
    
    }


    ligando() {
        return `ligando para ${this.#nome}...`
    }
}


const amiguinho = new Amigo('Jonas', 321)

console.log(amiguinho.getNome())
console.log(amiguinho.getTelefone())

console.log(amiguinho.ligando())
// amiguinho.amigosMap()
