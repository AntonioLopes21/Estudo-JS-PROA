
let frase = "javascript javascript javascript meu amor"

// let frase2 = frase.replace(/javascript/g, 'java')
// console.log(frase2)

let quantosJs = frase.split("javascript").length -1

for(let i = 0; i < quantosJs; i++) {
    frase = frase.replace("javascript", "java")
}

console.log(frase)

//estudar o foreach