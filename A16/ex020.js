function par_impar(numero)/*parametro*/{
    //ação
    numero = Number.parseInt(numero);
    if(numero % 2 == 0) return 'Par';
    else return 'Impar'; //retono
}

console.log(`o número 8 é ${par_impar(8)}`) // chamada