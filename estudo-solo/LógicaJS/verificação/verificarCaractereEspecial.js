const specialCaractere = (str) => {

    let caracteresEspeciais = {}

    //isso é um regex
    let caracteresPermitidos = /^[a-zA-Z0-9\s]*$/ 

    for(let i = 0; i < str.length; i ++) {
        var caractere = str[i]
    
        if(!caracteresPermitidos.test(caractere)) {
           if(caracteresEspeciais[caractere]) {
            caracteresEspeciais[caractere] ++
            } else {
                caracteresEspeciais[caractere] = 1
            }
        }

        
     }
     return caracteresEspeciais

}

console.log(specialCaractere("g!@#$%%@#@#!@"))