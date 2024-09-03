// const readline = require('readline')

//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })


const calculadora = (num1, num2, opcao) => {
    

    
    let resposta = "";
   
    switch (opcao) {
        case 1: 
            resposta = `${num1} + ${num2} = ${num1 + num2}`;
            console.log("1. Adição:")
            console.log(resposta)
        break;

        case 2: 
            resposta = `${num1} - ${num2} = ${num1 - num2}`;
            console.log("2. Subtração:")
            console.log(resposta)
        break;
        case 3: 
            resposta = `${num1} x ${num2} = ${num1 * num2}`;
            console.log("3. Multiplicação:")
            console.log(resposta)
        break;
        
        case 4: 
            if(num2 != 0) {
            resposta = `${num1} / ${num2} = ${num1 / num2}`;
            console.log("4. Divisão:")
            console.log(resposta)
        } else {
            console.log("divisão por zero não é permitida")
        }

        break;
       
        default:
            console.log("resposta inválida")
        break;

    }

  
 }

calculadora(2, 0, 4)