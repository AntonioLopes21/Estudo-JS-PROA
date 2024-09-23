const saudacoesPaulin =(nome, sobrenome) => {
    console.log(`${nome} ${sobrenome} retorno com template string`)
}

saudacoesPaulin('Pauliiiiiiin', 'sousa')

const arrow = () => console.log('console log na arrow com parametros vazios')
arrow()

const flecha = _ => {
    return 'pois é né meu nobre... a arrow function é coisa de louco'
}

console.log(flecha())