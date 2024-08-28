function caractere(str) {
    let quantidade = 0
    let caracteres = ["!","#","$","%","&", "*"]

    for (x of str) {
        if(caracteres.includes(x)) {
            quantidade ++
        }
    }
    console.log(`O numero de caracteres especiais é ${quantidade}`)
}

caractere("!@##$")

//tipagem dinâmica - não precisa especificar o tipo dos dados