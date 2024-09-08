/**crie um pequeno sistema onde você pode adicionar
 * diferentes tipos de funcionários (por exemplo,
 * engenheiros, Designers) e gerencie suas atividades.
 * use todos os conceitos de POO aprendidos até aqui
 * 
 */

class Funcionario {
    #nome
    #funcao
    #salario

    constructor(nome, funcao, salario) {
        this.#nome = nome
        this.#funcao = funcao
        this.#salario = salario
    }

    get getNome() {
        return `${this.#nome}`
    }

    set setNome(nome){
        if(!nome) {
            console.log('O nome não pode ser vazio')
        }
        this.#nome = nome
    }

    get getFuncao() {
        return `O funcionário ${this.#nome} é ${this.#funcao}`
    }

    set setFuncao(funcao) {
        if(funcao.toLowerCase() === 'desenvolvedor') {
            console.log(`O funcionário ${this.#nome} é ${this.#funcao}`)
            this.#funcao = funcao
        }
    }

    get getSalario() {
        return `O funcionário ${this.#nome} recebe: ${this.#salario}`
    }

    set setSalario(salario) {
        if(salario <= 1200) {
            console.log(`O funcionário ${this.#nome} é feliz recebendo pouco`)
        }
        this.#salario = salario
    }

    baterPonto(){
        return`O funcionário ${this.#nome} chega no horário`
    }

    pausaAlmoco() {
        return `O funcionário ${this.#nome} tem uma pausa de 1 hora para refeições`
    }

    infoFuncionario(){
        return `${this.#nome} também tem a sua função principal na empresa. ele é: ${this.#funcao}, tem um salário de ${this.#salario} e sua saúde mental é ótima. Veja o que ele respondeu: ${this.saude}`
    }

}

class Programador extends Funcionario {
    constructor(nome, funcao, salario, saude) {
        super(nome, funcao, salario) 
        this.saude = saude
    }


    set setFuncao(funcao) {
        
        if(funcao.toLowerCase() === 'desenvolvedor') {
            console.log(`${this.getNome} é um dev: ${this.getFuncao}`)
            super.setFuncao = funcao
        } else {
            console.log("Nada disso, meu parceiro. Sou dev... anote aí vá")
        }
    }

    set setSalario(salario) {
        if(salario <= 1200) {
            console.log(`"O funcionário ${this.getNome} é feliz recebendo pouco" kkkkkk é sim`)
            super.setSalario = salario
        } else {
            console.log("Muito obrigado por supor que eu ganharia tanto!")
            super.setSalario = salario
        }
        
    }

    pausaAlmoco() {
        let funcaoDaClassePai = super.pausaAlmoco()

        return `${funcaoDaClassePai} Ele também é bom porque não conhece o conceito de dormir bem`   
    }

    infoFuncionario() {
        let infoDev = super.infoFuncionario()

        return `${infoDev}`
    }

    
}

class Designer extends Funcionario {
    constructor(nome, funcao, salario, felicidade) {
        super(nome,funcao, salario)
        this.felicidade = felicidade
    }


    infoFuncionario() {
        let InfoDesigner = super.infoFuncionario()
        
        return `${InfoDesigner} mas minha felicidade tá aqui: ${this.felicidade}`
    }


}

const prog1 = new Programador('antonio', 'Desenvolvedor', 2500, 'instável')

console.log(prog1.baterPonto())
console.log(prog1.pausaAlmoco())
console.log(prog1.infoFuncionario())
console.log('')
prog1.setFuncao = 'cantor'
prog1.setFuncao = 'desenvolvedor'

console.log('')
const design1 = new Designer('Rodrigo', 'Designer', 8000, 'figma')
console.log(design1.baterPonto())
console.log(design1.pausaAlmoco())
console.log(design1.infoFuncionario())
