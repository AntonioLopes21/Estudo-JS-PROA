var novoParagrafo = document.createElement('p')
console.log(novoParagrafo)

var texto = document.createTextNode('Este é o conteudo do parágrafo')

novoParagrafo.appendChild(texto)

var body = document.querySelector('body')

//appendChild inserindo elementos
body.appendChild(novoParagrafo)



//no container

var container = document.getElementById('container')

var element = document.createElement('span')

element.appendChild(document.createTextNode('texto do span'))
console.log(element)
container.appendChild(element)