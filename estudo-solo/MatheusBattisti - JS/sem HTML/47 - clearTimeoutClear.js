/**
 * clearTimeout e clearInterval
 * 
 */

let x = 0

let meuTimer = setTimeout(() => {
    console.log("o x é 0")
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(meuTimer)
    console.log("o x passou de 0")
}

//clearsetInterval

let meuIntervalo = setInterval(function() {
    console.log('imprimindo intervalo')
}, 1000)

setTimeout(() => {
    console.log('Não precisamos mais repetir')
    clearInterval(meuIntervalo)
}, 5000);