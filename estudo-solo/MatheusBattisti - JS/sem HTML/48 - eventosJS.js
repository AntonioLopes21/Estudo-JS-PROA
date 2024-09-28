/***
 * eventos do mouse, click, mouse entrando 
 * ou saindo de algum elemento
 * 
 * carregamento de página 
 * 
 * etc
 */


//eventos onload
window.onload = function() {
    console.log('carregou o DOM')
    
    let title = document.querySelector('#title')
    console.log(title)
}

console.log("fora do onload")