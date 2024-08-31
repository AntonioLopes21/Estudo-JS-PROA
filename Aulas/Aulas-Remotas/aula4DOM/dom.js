document.querySelector('h1').textContent = "Novo título!"
document.querySelector('p').textContent = "bora bora"
//criar elemento
let novoParagrafo = document.createElement('p1')
document.body.appendChild(novoParagrafo)



//remover elemento 
let elementoParaRemover = document.querySelector('p')
elementoParaRemover.remove()




let botaoForm = document.getElementById('btnForm')

const clicarNoBotao = () => {
   botaoForm.addEventListener('click', () => {
    alert('botão clicado!')
   })
    
}

clicarNoBotao();

function verificacaoNome() {
    //o query selector é tanto para id quanto para classe
    let nome = document.getElementById('nameForm')
    let valorNome = nome.value

    if(valorNome.length == 0) {
        alert(`O campo ${valorNome} não pode estar vazio`)
    } else {
        alert(`O nome digitado foi: ${valorNome}`)
        nome.style.border = 'green solid 3px'
    }
}

function verificacaoSenha () {
    let senha = document.getElementById('passwordForm')
    let valorSenha = senha.value

    if(valorSenha.length == 0) {
        alert("Digite uma senha!")
        senha.style.border = 'red solid 3px'
    } else {
        alert(`A senha digitada foi: ${valorSenha}`)
        nome.style.border = 'green solid 3px'
    }
}


const validacoes = () => {
    verificacaoNome()
    verificacaoSenha()
    clicarNoBotao()
}