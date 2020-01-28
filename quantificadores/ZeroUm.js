const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um
const regex = /fogo?/gi
console.log(texto.match(regex))
console.log(texto2.match(regex))