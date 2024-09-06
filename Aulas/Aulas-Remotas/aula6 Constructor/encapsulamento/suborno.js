 class juiz {
    #valor

    constructor (valorSuborno) {
       this.valor = valorSuborno
     }

     //o get pega o valor e manipula
     //de forma segura
     getValorSuborno() {
         return this.#valor
     }


     //no set fazemos a lógica
     set valor(valorSuborno) {
         if(valorSuborno <= 0) {
             this.#valor = "cê segue sua vida e não suborna o arbitro. Hoje você está livre de problemas"
            } else if(valorSuborno > 0 && valorSuborno <= 2000) {
             this.#valor = "Você tá preso, painho"
            } else if (valorSuborno > 2000) {
             this.#valor = "Aceito seu valor do suborno e fique tranquilo. O Corintia vai ganhar"
            }

           
     }
    
 }


 const meuJuiz1 = new juiz(0)
 console.log(meuJuiz1.getValorSuborno())
 console.log("")

 const meuJuiz = new juiz(1000)
 console.log(meuJuiz.getValorSuborno())
 console.log("")


 const judge = new juiz(2500) 
 console.log(judge.getValorSuborno())
