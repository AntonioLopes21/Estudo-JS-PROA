let texto1 = "Olha o texto, meu bom";
let palavra = texto1.split(" ");
console.log(palavra);
console.log(palavra[4]);

// Tamanho da frase
console.log(texto1.toUpperCase() + "\n\n\n");

// Corrigir a primeira letra para maiúscula
if (texto1) {
    // Deixa a primeira letra em maiúscula
    let texto1Corrigido = texto1.charAt(0).toUpperCase() + texto1.slice(1);
    console.log("no if");
    console.log(texto1Corrigido);
}


//estudar arrowfunction