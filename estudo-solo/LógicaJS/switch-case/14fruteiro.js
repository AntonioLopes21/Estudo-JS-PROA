const { stdin } = require('process')
const readline = require('readline')

const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

ler.question("Bem vindo a frutaria, selecione: \n1. ir nas maças\n2. procurar os kiwis\n3. verificar as melancias", fruta =>  {
    switch(fruta) {
        case '1': 
            console.log('Não vendemos esta fruta aqui')
        break

        case '2':
            console.log('Estamos com escassez de kiwis')
        break

        case '3':
            console.log('Aqui está, são 3 reais o quilo')
        break

        default: 
            console.log("Não temos mais opções :( estamos de mudança ainda")
    }
    ler.close()
})