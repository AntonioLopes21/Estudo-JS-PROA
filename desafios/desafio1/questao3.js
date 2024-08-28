/**
 * Escreva um programa que conte quantas vezes caracteres especiais
 * como (!@#$%¨&*) aparecem fornecida pelo user
 */

//funcao para verificar a mensagem
function verificarCaracteres(mensagem) {
    //declarando caracteres especiais
    const specialCaracters = "!@#$%¨&*";

    //imocoamdo como false
    let possuiCaractereSpecial = false
    let i
    //for para percorrer a mensagem e contar os caracteres
    for( i = 0; i < mensagem.length; i++) {

        const caractere = mensagem[i]
        //para verificação de caracteres
        if(specialCaracters.includes(caractere)) {
            //se entrar no if tem caracter especial
            possuiCaractereSpecial = true
            mensagem[i ++]
            break;
        }
    }
    //retorne a variavel com true ou false
    return possuiCaractereSpecial
}

console.log(verificarCaracteres("ola mundo!"))