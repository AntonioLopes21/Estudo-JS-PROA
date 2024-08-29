const ehPalindromo = (str) =>  {
    let normalizada = str
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()

    let invertida = normalizada
    .split('')
    .reverse()
    .join('')

    return normalizada === invertida
}

console.log(ehPalindromo("radar"))
console.log(ehPalindromo("hello"))
console.log(ehPalindromo("A man a plan a canal Panama"));