let v = function(n1 = 0){
    n1 = Number.parseInt(n1);
    return n1*2;
}

// a variável v É uma função!!!

console.log(` variável é uma função e ela está devolvendo: ${v(15)}`);