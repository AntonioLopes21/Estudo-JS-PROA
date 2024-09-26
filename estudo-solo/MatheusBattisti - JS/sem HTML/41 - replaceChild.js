var elemento = document.createElement('h3')

elemento.classList= 'testando-classe'

 var texto = document.createTextNode('texto do h3')

 elemento.appendChild(texto)

 console.log(elemento)

 //selecionar elemento
//troca

var title = document.querySelector('#title')
console.log(title)

var pai = title.parentNode

//trocar elemento
pai.replaceChild(elemento, title)
