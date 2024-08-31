// document.getElementById('idCustomizada').innerHTML = "<b>innet html</b>"
document.getElementById('idCustomizada2').innerText = "inner text sem tags"

//com timeout
setTimeout(function() {
    document.getElementById('idCustomizada').innerHTML = "<b>innet html com setTimeOut definido para 3 segundos</b>"

}, 3000)