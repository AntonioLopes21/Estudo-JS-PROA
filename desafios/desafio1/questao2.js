//verificar se ´é primo
function ehPrimo(valor) {
//numeros primos nçao sao menores que 1
    if(valor <= 1) {
        return "não é primo";
    }
    //2 é o unico numero primo par
    if(valor == 2) {
        return "é primo";
    }
    if(valor %2 == 0)  {
        return "Não é primo";
    }
    
    return "é primo";
}

console.log(ehPrimo(343))