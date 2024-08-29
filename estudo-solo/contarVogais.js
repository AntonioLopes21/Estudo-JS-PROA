function contarVogais(str) {
    const vogais = ['a','e','i','o','u']
    let contagem = 0

    for(let i = 0; i < str.length; i ++) {
        let palavra = str[i].toLowerCase()

        if(vogais.includes(palavra)) {
           contagem ++
            
        } 
    }

    return contagem + " vogais"
}

console.log(contarVogais("palavra"))
//commit