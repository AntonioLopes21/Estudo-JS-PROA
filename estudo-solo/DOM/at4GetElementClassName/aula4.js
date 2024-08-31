document.getElementsByClassName('painho')[0].innerHTML = "alterando vetor 0 pelo js"
document.getElementsByClassName('painho')[1].textContent = "texto no indice 1"

// setTimeout(function() {
//     document.getElementsByClassName('painho')[2].innerHTML = "setTimeOut 3 segundos"
// }, 3000)

setTimeout(() => {
    document.getElementsByClassName('painho')[2].innerHTML = "setTimeOut 3 segundos ARROW FUNCTION"
}, 3000);