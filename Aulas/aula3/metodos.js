//aula 1 tipos de dados compostos
//manipulação json

/**
 * multiplos comentarios
 * Operadores aritméticos 
 *  = atribuir valor
 * == comparar valor
 * === comparar valor e tipo
 * incremento e decremento -- e ++
 * 
 */

/**
 * Em JavaScript, uma "máscara" é uma 
 * técnica usada para formatar ou validar 
 * entradas de dados, como números de 
 * telefone, CPF, ou datas. Basicamente,
 *  é uma forma de definir um padrão para
 *  como os dados devem ser exibidos ou
 *  inseridos.
Por exemplo, se você quer que um usuário 
insira um número de telefone no formato
 (XX) XXXX-XXXX, você pode usar uma máscara para garantir que ele siga esse padrão. A máscara pode ser aplicada em um campo de entrada em um formulário, ajustando automaticamente o texto conforme o usuário digita.
Existem bibliotecas 
e funções específicas em JavaScript, 
como o Inputmask ou cleave.js, que ajudam 
a implementar essas máscaras de forma
 mais fácil e eficiente.
 
resumo "é uma forma de definir um padrão para como os dados devem ser exibidos ou inseridos."
 
VALLESKA VITORIA SILVA DE SOUZA
Em JavaScript, uma "máscara" é uma técnica usada para formatar ou validar entradas de dados, como números de telefone, CPF, ou datas. Basicamente, é uma forma de definir um padrão para como os dados devem ser exibidos ou inseridos.  Por exemplo, se você quer que um usuário insira um número de telef…

InputMask nessas versoes atuais ele ta atrasado, entao se forem usar vai da ficar mostrando uns alertas no console




funções

 
 */


//declarando objeto
let pessoa = {
    nome: "Antônio",
    idade: 20,
    profissao: "Desenvolvedor",
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + `, tenho ${this.idade} anos e sou ${this.profissao}`)
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao + "\n")

pessoa.saudacao()

let outraPessoa = {
    nome : "ana",
    idade : 35,
    profissao : "Contadora",
    saudacao: pessoa.saudacao
    
}

outraPessoa.saudacao()
console.log(pessoa["idade"]) //output valor da idade

pessoa.email = "Antonio@gmail.com"
console.log(pessoa)


// delete pessoa.profissao
// console.log(pessoa.profissao)
// console.log(pessoa)
//deleta pessoa
pessoa.profissao;

console.log(pessoa)



const mainsUmaPessoa = {
    nome : "ana",
    idade : 35,
    profissao : "Contadora",
    saudacao: pessoa.saudacao
    
}
// //certo
// let mafioso = {
//     nome : "djonha",
//     idade : 325,
//     profissao : "apelidador",
//     saudacao: pessoa.saudacao
// }

// mainsUmaPessoa =  mafioso
// console.log(mafioso)

mainsUmaPessoa.faixa = "ai sim"

console.log(mainsUmaPessoa)



let texto = "javaScript é fraquinho"

console.log(texto.replace('javaScript', 'Java'))
console.log(texto)


console.log(texto[texto.length -1])
//cada caractere compõe um indice
console.log(texto.length)


//consigo alterar o valor do objeto mas não consigo 
//alterar o tipo


// const palavra = "amenizada"
// palavra = "serafim"
// console.log(palavra)


/**strings
 * concatenação :
 *         console.log("Olá, meu nome é " + this.nome + `, tenho ${this.idade} anos e sou ${this.profissao}`)

 *  
   
 */

//acessando palavra
let texto1 = "Olha o texto, meu bom"
let palavra = texto1.split(" ")
console.log(palavra)
console.log(palavra[4])
//tamanho da frase
console.log(palavra.length)

//converte para maiuscula ou menuscula
console.log(texto1.toUpperCase())
if(texto1.toLowerCase) {
    texto1[0] = texto1[0].toUpperCase()
    console.log("no if")
    console.log(texto1)
}

console.log(texto1.toLowerCase())



//pega o primeiro elemento ate o 9 pelo indice
console.log("com substring: " +texto1.substring(0, 4))//output do indice 0 até o 4

