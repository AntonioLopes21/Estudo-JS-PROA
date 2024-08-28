const ehPrimo = valor => {
    let primacidade = ""

    if (valor <= 1) {
        primacidade = "Não é primo";
    }
    if (valor === 2) {
        primacidade = "É primo";
    }
    if (valor % 2 === 0) {
        primacidade = "Não é primo";
    }

    for (let i = 2; i < valor; i++) {
        if (valor % i === 0) {
            primacidade = "Não é primo";
        }
    }
    
    return primacidade
}

console.log(ehPrimo(100))