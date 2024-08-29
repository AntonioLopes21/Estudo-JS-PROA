//escrever um dado programa que dado um numero de 1 a 7 exiba o dia da semana

let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;

    case 3:
        console.log("Terça");
        break;

    case 4:
        console.log("Quarta");
        break;

    case 5:
        console.log("Quinta");
        break;

    case 6:
        console.log("Sexta");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Valor inválido");
        break;
}


console.log(dia);

//com switch case e true
//formatação de string

function solicitacao(salario) {


    if (salario < 1000) {
        console.log("você não paga nada por seu salário ser abaixo de " + salario);
    } else if (salario >= 1000 && salario <= 2000) {
        resultado = salario * 0.05;
        console.log("Baseado no seu salário: " + salario + " você pagará 5% para o governo: " + resultado)
    } else if (salario > 2000 && salario <= 3000) {
        resultado = salario * 0.10;
        console.log("Baseado no seu salário: " + salario + " você pagará 10% para o governo: " + resultado)
    } else {
        resultado = salario * 0.5;
        console.log("você recebe para kct e vai pagar 50% para o gov: " + resultado)
    }

}

solicitacao(9000)

//switch case com o true
let tipoDePessoa = "";
let valorDoSalario = 15000;

switch (true) {
    case valorDoSalario < 1000:
        tipoDePessoa = "Estagiário"
        console.log(tipoDePessoa + ": só esse tipo de pessoa recebe isso");
        break

    case valorDoSalario >= 1000 && valorDoSalario <= 2500:
        tipoDePessoa = "CLT"
        console.log(tipoDePessoa + ": Futuro da gente S2")
        break

    case valorDoSalario > 2500 && valorDoSalario <= 4000:
        tipoDePessoa = "CLT bem de vida se for solteiro"
        console.log(tipoDePessoa + " e se for morrer só")
        break

    case valorDoSalario > 4000 && valorDoSalario <= 7000:
        tipoDePessoa = "CLT que venceu na mízera vida de CLT"
        console.log(tipoDePessoa)
        break

    case valorDoSalario > 7000 && valorDoSalario <=10000: 
        tipoDePessoa = "classe alta"
        console.log(tipoDePessoa + " que paga conta de luz no valor do seu aluguel")
        break

    case valorDoSalario > 10000 && valorDoSalario <=30000:
        tipoDePessoa = "Só pode ser mafioso"
        console.log(tipoDePessoa)
        break

    default:
        console.log("você fez pacto com o capeta")    
}


//organizando projeto

https://youtu.be/Px4bbFsf4f0?si=ZUKP78KBBk_Ai0dN

attatat