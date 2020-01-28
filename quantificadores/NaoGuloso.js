const texto = '<div>Conteúdo 01</div><div>Conteúdo 02</div>'

//quantificadores SÃO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// qunatificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{1,100}?<\/div>/g))