function caractere(str) {
    let quantidade = 0
    let caracteres = ["!","#","$","%","&", "*"]
    carac = []

    for (x of str) {
        if(caracteres.includes(x)) {
            quantidade ++
            carac.push(x)
        }
    }
    console.log(`O numero de caracteres especiais é ${quantidade}, ${carac}`)
}

caractere("!@##$")

//tipagem dinâmica - não precisa especificar o tipo dos dados
