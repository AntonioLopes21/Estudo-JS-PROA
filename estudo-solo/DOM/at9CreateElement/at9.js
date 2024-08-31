//criar um elemento li e um nó de texto

var elemento = document.createElement('li')
var texto = document.createTextNode('item da lista adicionado - appendChilld')

elemento.appendChild(texto)

//recuperar elemento lista e anexar li ao final da linha

var lista = document.getElementsByTagName('ul')[0]
lista.appendChild(elemento)


//insertBefore
var lista2 = document.getElementsByTagName('ol')[0]
var itens = lista2.getElementsByTagName('li')

//criando o elemento
var elemento2 = document.createElement('li')
elemento2.textContent = "outro item - insert before"

//inserindo valor em uma posição específica
lista2.insertBefore(elemento2, itens[0])

//remove child

lista2.removeChild(itens[1])