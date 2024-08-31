document.getElementsByName('nomeDiv')[0].innerHTML = "<b>Div por nome no js por posição no vetor</b>"
document.getElementsByName('nomeDiv')[2].innerHTML = "texto da div pelo vetor [2]"

setTimeout(function() {
    document.getElementsByName('nomeDiv')[1].innerHTML = "setTimeOut 3 SEGUNDOS"
},3000);