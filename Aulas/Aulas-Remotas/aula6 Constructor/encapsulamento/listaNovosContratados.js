class NomeContratados {
    #listaContratados = []

    constructor (contratacoes) {
        this.#listaContratados = contratacoes;
    }


    adicionarContratados(contratados) {
        this.#listaContratados.push(contratados)
    }

    removerContratados(contratados) {
        this.#listaContratados.pop(contratados)
    }
}

//continuo mais tarde: agora são 15:38