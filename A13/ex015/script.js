//var corpo = window.document.body;
//corpo.addEventListener('onload', carregar);

function carregar(){
    var mensagem = window.document.getElementById('msg');
    var foto = window.document.querySelector('img#imagem');
    var data = new Date();
    var hora = Number.parseInt(data.getHours());
    var minuto = Number.parseInt(data.getMinutes());

    //hora = 10;

    mensagem.innerText = `Agora são exatamente ${hora}:${minuto} horas`;

    if(hora <= 12){
        foto.src = 'Imagens/manhã_semfundo.png'; //obs: o src no js é com a barra / e no html é com a barra \
        window.document.body.style = 'background-color: #789374;';
    }else if(hora<= 18){
        foto.src = 'Imagens/tarde_semfundo.png';
        window.document.body.style = 'background-color: #f5ad94;';
    }else{
        foto.src = 'Imagens/noite_semfundo.png';
        window.document.body.style = 'background-color: #303030;';
    }    
}