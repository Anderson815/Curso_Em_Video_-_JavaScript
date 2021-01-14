function soma(n1 = 0, n2 = 0){ // parametro pré=determinados, só é passado esse valor se a chamada não tiver com todos os parametros
    return n1 + n2;
}

console.log(`Funciona normal: ${soma(8, 6)}`); //funciona normal
console.log(`Set do n2 para 0: ${soma(8)}`); // irá settar o n2 para 0, já que eu não especifiquei seu valor
console.log(`Set do n1 e do n2: ${soma()}`); // irá settar tanto n1 quanto n2 para 0, como decrado na função