function Bhaskara(a, b, c) {

    
    let x = 1
    let funcao = a*(x*x) + b*x + c
    let resultado = funcao

    let delta = (b*b) - 4*a*c

    let vetor = []
    let resposta = ""

    if(delta < 0) {
        resposta = "Delta negativo "
    } else if (delta == 0) {
        resposta = `Raiz única: ${x}`
        vetor.push(x)
    } else {
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        resposta = `duas raízes diferentes: ${x1} e ${x2} `
        vetor.push(x1, x2)
    }

    return `a resolução da equação é: ${resultado}\nDelta é igual a: ${delta}\nOs valores de x são ${vetor.join(", ")}`

}

console.log(Bhaskara(4,21,2))