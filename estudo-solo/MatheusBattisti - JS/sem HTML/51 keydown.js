//keydown quando alguma tecla é pressionada


//keydown
document.addEventListener('keydown', function(event) {
    console.log(event.key)

    if(event.key === 'Enter') {
        console.log('apertou o enter')
    }
})


//keyup

document.addEventListener('keyup', function(e) {
   
    if(event.key === 'Enter') {
        console.log('soltou o Enter')
    }
})

