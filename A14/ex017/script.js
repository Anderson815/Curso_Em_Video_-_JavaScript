window.alert('Bem vindo ao contador');

var contar = window.document.querySelector('input#contar');
contar.addEventListener('click', cont);

function cont(){
    var out = window.document.getElementById('out');

    var i = window.document.querySelector('input#i').value;
    var f = window.document.querySelector('input#f').value;
    var p = window.document.querySelector('input#p').value;

    if(i != '' && f != '' && p != ''){

        i = Number.parseInt(i);
        f = Number.parseInt(f);
        p = Number.parseInt(p);

        if(p <= 0){
            window.alert('Passo Inválido, o passo foi substituido por 1');
            p = 1;
            window.document.getElementById('p').value = p;
        }

        out.innerText = 'Contando: ';
        if(i <= f){
            // contar crescente
            while(i <= f){
                out.innerHTML = out.innerHTML + `${i} \u{1F449} `;  
                i += p;    
            }
        }else{
            // contar decrescente 
            for(var c = i; c >= f; c-= p){
                out.innerHTML += `${c} \u{1F449}`;
            }
        }
        out.innerHTML += ' \u{1F3C1}';
    }else{
        out.innerHTML = 'Impossível contar, algum campo está vazio';
    }

}