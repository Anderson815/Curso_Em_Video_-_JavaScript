let num = [9 , 5, 3, 8, 7];
console.log(`O vetor completo é ${num}`);

for(let contador = 0; contador < num.length; contador++){
    console.log(`A ${contador + 1}º posição do vetor possui o valor ${num[contador]}`);
}

console.log();
num.sort(); // organiza em forma crescente
console.log(`O vetor completo é ${num}`);
for(let contador = 0; contador < num.length; contador++){
    console.log(`A ${contador + 1}º posição do vetor possui o valor ${num[contador]}`);
}

console.log();
num.push(1); // acrescenta um novo elemento
console.log(`O vetor completo é ${num}`)
for(let contador in num){ //Manei de fazer o for each no JS
    console.log(`A ${Number.parseInt(contador) + 1}º posição do vetor possui o valor ${num[contador]}`);
}

console.log();
console.log(`O vetor completo é ${num}`);
console.log(`Com isso o vetor agora tem ${num.length} posições`)

console.log();
console.log('---------- PESQUISAS DE VALORES ----------')

console.log();
console.log(`O vetor completo é ${num}`);
console.log(`valor 8 está no indice ${num.indexOf(8)}`); //indexOf serve para pesquisar o indice onde tem o valor que foi passado como parametero

console.log();
num.push(5); // valor duplicado
console.log(`O vetor completo é ${num}`);
console.log(`valor 5 está no indice ${num.indexOf(5)} - Pega o primeiro, pois está Duplicado`);

console.log();
console.log(`O vetor completo é ${num}`);
console.log(`valor 19 está no indice ${num.indexOf(19)} - Não existe`);


/*
num[5] = '11'; // você consegue aumentar o tamanho do array sem problema nenhum
               // e misturar os tipos dentro dele

console.log(`o vetor é ${num}`);
console.log(`a posição 0 tem o valor ${num[0]}`);
console.log(`a posição 2 tem o valor ${num[2]}`);
console.log(`a posição 4 tem o valor ${num[4]}`);

num.push(13);

console.log(`o vetor é ${num}`); // método que acrescenta automáticamente mais um elemento

num[10] = 100;

console.log(`o vetor é ${num}`);
console.log(`o tamanho do array é ${num.length}`);
*/