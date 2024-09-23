function somaNum(num1, num2) {
    let resultado = num1 + num2

    return resultado
}

console.log("Função normal:\n"+somaNum(2,3))

const arrowSomaNum = (num1, num2) => {
    return num1 + num2
}

console.log("Arrow function:\n"+arrowSomaNum(2,5))

//this

const func = function() {
    console.log(this)
}

const arrow = () => console.log(this)
    func()
    arrow()