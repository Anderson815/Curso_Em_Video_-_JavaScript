window.alert('Bem vindo a tabuada');

function gerar(){

    var numero = window.document.getElementById('n');
    var resultado = window.document.querySelector('select#resultado');
    
    /*
    var t = window.document.querySelector('p#t');
    t.innerHTML = '';

    ao usar o atributo innerHTML é como se eu estivesse escrevendo entre o abre e fecha tag
    no caso do exemplo de cima é como se eu tivesse modificando lá HTML isso aqui:
    <p id="t"> estou deixando aqui sem nada </p>
    */

    if(numero.value != ''){
        var n = Number.parseInt(numero.value);
        var r = Number.parseInt('0');

        resultado.innerHTML='';
        for(var c = 1; c <= 10; c++){
            r = c * n;

            /* jeito mais complexo de limpar o select
            if(window.document.getElementById(`${c}`) != null){
                window.document.getElementById(`${c}`).remove();
            }
            */
            var i = window.document.createElement('option');
            i.setAttribute('id', `${c}`);
            i.text = `${n} x ${c} = ${r}`;
            resultado.appendChild(i);

        }
    } else{
        window.alert(' !!! ERRO - Por favor, insira um número');
    }
    
}