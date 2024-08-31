document.getElementsByTagName('h1')[0].innerHTML = "elemento h1 tag name"
document.getElementsByTagName('h1')[1].innerHTML = "elemento h1 tag name"
document.getElementsByTagName('h1')[2].innerHTML = "elemento h1 tag name"

document.getElementsByTagName('p')[2].innerHTML = "elemento p tag name vetor 2"

document.getElementsByTagName('div')[0].innerHTML = "div por vetor [0]"

setTimeout (() => {
    document.getElementsByTagName('p')[1].innerHTML = "3 segundos p  indice 1"
}, 3000)

