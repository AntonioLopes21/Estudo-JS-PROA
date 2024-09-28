//evento mouse over

let title = document.querySelector('#title')

title.addEventListener('mouseover', function() {
    this.style.backgroundColor = "red";
})


//mouseout
title.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white'
})



//afetar outro elemento
let paragrafo = document.querySelector('.paragrafo')

paragrafo.addEventListener('mouseover', function() {

    let legenda = document.querySelector('#legenda')

    legenda.classList.remove('hide')
})

paragrafo.addEventListener('mouseout', function() {

    let legenda = document.querySelector('#legenda')

    legenda.classList.add('hide')
})

