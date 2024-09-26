/**
 * document object model
 * 
 * interface de programação para html
 * 
 * manipular eventos de DOM para afetar o html
 * 
 * acessar dom caracteriza=se por identificar um elemento do html
 * através de métodos
 * 
 * depois podemos manipular o elemento como quisermos
 * o DOM é semelhante as regras de CSS
 * 
 * podemos acessar por tags, ids, classes...
 * 
 * 
 */

//tag 
var titulo = document.getElementsByTagName('h1')[0]

console.log(titulo)

var li = document.getElementsByTagName('li')

//id

var paragrafo = document.getElementById('paragrafo')

