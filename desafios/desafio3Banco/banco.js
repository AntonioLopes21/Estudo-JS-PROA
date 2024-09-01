const senha = 3589


function verificarNome() {

    let usuarioLogin = document.querySelector('#inputName')
    let userConfirmacao = usuarioLogin.value
    


    if(userConfirmacao.length == 0) {
        usuarioLogin.style.border = 'red solid 3px'
        alert('O usuário não pode ser nulo')
    } else {
        usuarioLogin.style.border = 'green solid 3px'
    }

}

function verificarSenha() {
    let senhaLogin = document.querySelector('#inputPassword')
    let armazenarSenha = parseInt(senhaLogin.value,10)

    if (armazenarSenha !== senha) {
        senhaLogin.style.border = 'red solid 3px'
        alert('A senha correta para testes é a 3589')
    } else {
        alert('Acesso permitido')
        senhaLogin.style.border = 'green solid 3px'
        let usuarioLogin = document.querySelector('#inputName').value;
        window.location.href = 'menuInicial.html'
    }
}


const iniciar = () => {
    verificarNome()
    verificarSenha()
}

