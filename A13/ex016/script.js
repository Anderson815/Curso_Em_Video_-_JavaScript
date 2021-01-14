window.alert('Bem vindo');

var data_atual = new Date();
var ano_atual = Number.parseInt(data_atual.getFullYear());
var res = window.document.getElementById('res');

window.document.getElementById('ano').value = ano_atual;
window.document.getElementById('ano').max = ano_atual;

var verif = window.document.querySelector('input#verificar');
verif.addEventListener('click', verificar);

function verificar(){
    var ano_nascimento = Number.parseInt(window.document.getElementById('ano').value);
    var idade = ano_atual - ano_nascimento;
    var sexo = window.document.getElementsByName('sexo');
    var genero = '';
    var info = window.document.querySelector('p#info');

    var imagem = window.document.querySelector('img#foto');
    if(imagem == null){
        imagem = window.document.createElement('img'); // cria um elemento no html
        imagem.setAttribute('id', 'foto'); //configura o atributo Id para Foto
        imagem.setAttribute('alt', 'Deu errado'); //configura o atributo Alt para Deu Errado
        imagem.setAttribute('title', 'Imagem da busca') // configura o atributo Title para Imagem da Busca
    } 

    if(sexo[0].checked){
        if(idade < 4){
            imagem.setAttribute('src', 'Imagens/Masculino/bebe_redondo.png'); // configura o atributo SRC para o endereço da imagem
            genero = 'um bebê';
        }else if(idade < 11){
            imagem.setAttribute('src', 'Imagens/Masculino/menino_redondo.png');
            genero = 'um menino';
        }else if(idade < 19){
            imagem.setAttribute('src', 'Imagens/Masculino/garoto_redondo.png');
            genero = 'um garoto';
        }else if(idade < 30){
            imagem.setAttribute('src', 'Imagens/Masculino/jovem_redondo.png');
            genero = 'um jovem';
        }else if(idade < 60){
            imagem.setAttribute('src', 'Imagens/Masculino/homem_redondo.png');
            genero = 'um homem';
        }else{
            imagem.setAttribute('src', 'Imagens/Masculino/idoso_redondo.png');
            genero = 'um idoso';
        }

    }else{
        if(idade < 4){
            imagem.setAttribute('src', 'Imagens/Feminino/bebe_redondo.png');
            genero = 'uma bebê';
        }else if(idade < 11){
            imagem.setAttribute('src', 'Imagens/Feminino/menina_redondo.png');
            genero = 'uma menina';
        }else if(idade < 19){
            imagem.setAttribute('src', 'Imagens/Feminino/garota_redondo.png');
            genero = 'uma garota';
        }else if(idade < 30){
            imagem.setAttribute('src', 'Imagens/Feminino/jovem_redondo.png');
            genero = 'uma jovem';
        }else if(idade < 60){
            imagem.setAttribute('src', 'Imagens/Feminino/mulher_redondo.png');
            genero = 'uma mulher';
        }else{
            imagem.setAttribute('src', 'Imagens/Feminino/idosa_redondo.png');
            genero = 'uma idosa';
        }
    }
    
    info.innerText = `detectamos ${genero} com ${idade} anos`;
    res.appendChild(imagem);// aloca o elemento criado no js a um elemento já exisatente do HTML (aparece a imagem)
    res.style.textAlign = 'center';
}