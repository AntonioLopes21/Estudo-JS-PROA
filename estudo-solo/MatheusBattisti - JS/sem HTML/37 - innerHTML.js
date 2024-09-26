/**
 * alterar conteudo via js
 * 
 */

var title = document.querySelector('#title')

//innerhtml
title.innerHTML = 'Testando o innerHTML'

//text content -> mais utilizado

var subtitle = document.querySelector('.subtitle')

console.log(subtitle)
subtitle.textContent = "textContent sendo usado"