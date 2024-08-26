let carro = {
    marca : "vw",
    modelo: "gol",
    ano: 2017,



}
console.log(carro)
console.log("\n\n")
carro.cor = "cinza"
console.log("adicionando cor\n " + carro.cor)

delete carro.ano
console.log("\n\ndeletando ano")
console.log(carro)