var idade = 65;
if(idade < 16){
    console.log(`Você tem ${idade} anos, portanto você não vota`);
}else if(idade < 18 || idade >= 60){
    console.log(`Você tem ${idade} anos, portanto seu voto é opcional`);
}else{
    console.log(`Você tem ${idade} anos, portanto você é obrigado a votar`);
}