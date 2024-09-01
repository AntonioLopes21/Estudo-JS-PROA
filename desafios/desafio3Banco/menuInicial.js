window.onload = () => {
    let nomeUsuario = localStorage.getItem('inputName')

    if(nomeUsuario) {
        document.querySelector('h1').textContent = `Olá ${nomeUsuario}, bem-vindo ao banco Proa!`
    } else {
        document.querySelector('h1').textContent =  "Olá usuário, bem-vindo ao banco Proa!"
    }
}