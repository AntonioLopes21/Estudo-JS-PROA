/**
 * eventos de click
 */


//inserir click
let btn = document.querySelector('.botao')

btn.addEventListener('click', function() {
    alert("CLICK")

    this.style.color = "red";
})



title.addEventListener('click', function() {
    alert('teste')
    let title = document.querySelector('#title')

    title.style.display = "none";
})


let paragrafo = document.querySelector('.paragrafo')
//double click
paragrafo.addEventListener('dblclick', function() {
    alert("click duplo!")
})