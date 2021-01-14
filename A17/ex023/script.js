window.alert('E ae boy');
var array_de_numeros = []; //aray

//var adicionar = window.document.getElementById('adicionar');
//adicionar.addEventListener('click', add);

var finalizar = window.document.querySelector('div#saida input#finalizar');
finalizar.addEventListener('click', fin)


// métodos principais
function add(){

    if(window.document.getElementById('resultado') != null){
        window.document.getElementById('resultado').remove();
    }

    window.document.getElementById('adicionar').blur();
    let numero = window.document.querySelector('div#entrada input#n');
    if(numero.value == "" || (numero.value < 1 || numero.value > 100)){
        window.alert('Por favor insira um número valido');
    }else{
        numero = Number.parseInt(numero.value);
        if(array_de_numeros.indexOf(numero) == -1){
            let n_item = window.document.createElement('option');
            n_item.setAttribute('id', `${numero}`);
            n_item.innerHTML = `Valor ${numero} adicionado`;
    
            array_de_numeros.push(numero);
            window.document.getElementById('lista').appendChild(n_item);
            
        }else window.alert(`O número ${numero} já foi adicionado`);       
    }
    window.document.querySelector('div#entrada input#n').value = "";
    window.document.querySelector('div#entrada input#n').focus();
}

function fin(){
    if(window.document.getElementById('resultado') != null){
        window.document.getElementById('resultado').remove();
    }

    window.document.getElementById('finalizar').blur();
    if(array_de_numeros.length == 0) window.alert('Não existe números adicionados');
    else{
        //Alterar aqui
        let p_resultado = window.document.createElement('p');
        p_resultado.setAttribute('id', 'resultado');
        
        p_resultado.innerHTML = `Ao todo, temos ${array_de_numeros.length} números cadastrados. <br>`;
        p_resultado.innerHTML += `O maior valor informado foi ${maximo()}. <br>`;
        p_resultado.innerHTML += `O menor valor informado foi ${minimo()}. <br>`;
        p_resultado.innerHTML += `Somando todos os valores, temos ${soma()}. <br>`;
        p_resultado.innerHTML += `A média dos valores digitados é ${media()}.`;

        p_resultado.style.lineHeight = '2';

        window.document.querySelector('div#saida').appendChild(p_resultado);
    }
}

//métodos auxiliares
function maximo(){
    let r = array_de_numeros[0];
    for(let indice = 0; indice < array_de_numeros.length; indice++){
        if(array_de_numeros[indice] > r) r = array_de_numeros[indice];
    }
    return r;
}

function minimo(){
    let r = array_de_numeros[0];
    for(let indice = 0; indice < array_de_numeros.length; indice++){
        if(array_de_numeros[indice] < r) r = array_de_numeros[indice];
    }
    return r;
}

function soma(){
    let r = Number.parseInt(0);
    for(let indice = 0; indice < array_de_numeros.length ; indice++){
        r += Number.parseInt(array_de_numeros[indice]);
    }
    return r;
}

function media(){
    let r = 0;
    return r = Number.parseFloat(soma() / array_de_numeros.length).toFixed(3).replace('.',',');
}