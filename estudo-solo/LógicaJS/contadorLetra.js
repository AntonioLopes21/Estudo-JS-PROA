function contadorLetras(str) {
    let contagem = {}
    let i;

    for(i = 0; i < str.length; i ++) {
        let caractere = str[i]
        
        if(/^[a-zA-Z0-9\s]$/.test(caractere)) {
            
            if(contagem[caractere]) {
                contagem[caractere] ++ 
            } else {
                contagem[caractere] = 1
            }
        }
    }

    return contagem
}

console.log(contadorLetras("amigo kkkkk"))