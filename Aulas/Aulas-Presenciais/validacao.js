//     const nome = document.querySelectorByID('name').value
//     const email = document.querySelectorByID('email').value
//     const nomes = []
//     const emails = []

function validarNome() {
    
    let elemento = document.getElementById("name").value
    let valorElemento = elemento.value
    
    if(elemento.length == 0) {
        alert("digite algo no nome")
        elemento.Style.border = 'red solid 3px'
        
    } else {
        alert("O nome digitado foi: " + elemento)
        elemento.Style.border = 'green solid 3px'
    }
}

function validarEmail() {
    let email = document.getElementById("emailInput").value
    let valorEmail  = email.value

    if(valorEmail.length == 0) {
        alert("digite algo no email")
        elemento.Style.border = 'red solid 3px'
    } else {
        alert("O email digitado foi: " + valorEmail)
        elemento.Style.border = 'green solid 3px'
    }
}


const validacoes = () => {
    validarNome()
    validarEmail()
}

