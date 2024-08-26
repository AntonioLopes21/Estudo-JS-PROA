/**
 * Escrever um programa que solicite 4 notas de provas
 * e calcule a media e diga se esta de recuperacao
 * reprovado ou aprovado
 * 
 * aprovado >=7
 * reprovado <5
 * rec >= 5 && <7
 */

function verificarSituacaoNota(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4)/4
    let resposta = ""

    if (media < 5) {
      resposta = "reprovado"
      
    } else if (media >=5 && media < 7 ) {
      resposta = "Recuperação"
      
    } else {
      resposta = "Aprovado"
    }

    return resposta
}

console.log(verificarSituacaoNota(10,0,10,4))