// hasAttribute
const verificacao = document.getElementById('idQualquer').hasAttribute('class')
// alert(verificacao)

document.write(document.querySelector('.classeQualquer3').hasAttribute('id'))

//get attribute
let atributoDiv = document.getElementById("idQualquer4")
//retornar o valor que está dentro da classe
document.write(atributoDiv.getAttribute('class'))//trueclasseQualquer retorno

//set attribute
//altera valor ou aplica
let atributoDiv2 = document.getElementById('idQualquer2')
//aplicando estilo
atributoDiv2.setAttribute('style', 'background: red')