var el = document.createElement('div')

el.classList = 'div-criada'

var container = document.querySelector('#container')

container.appendChild(el)

//insert before

var elemento2 = document.createElement('div')

elemento2.classList = 'div-before'

var el3 = document.querySelector('#container .div-criada')

console.log(el3)

container.insertBefore(elemento2, el3)