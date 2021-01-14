var vel = 65.0;
console.log(`a velocidade do seu carro é ${vel}Km/h`);
if(vel > 60){
    var nivel_gravidade = (vel - 60) / 10 <= 1? 1: Math.ceil(((vel - 60) / 10)); // Math.ceil(<valor float>) é um método estático da classe matemática e serve para arredondar o número sempre para CIMA
    var multa = nivel_gravidade * 150;
    console.log(`você recebeu uma multa SEU MULA, por correr demais!!! e terá que pagar ${multa.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
}else{
    console.log('dirija sempre na maior velocidade que você puder e receba uma SURPRESA!!!');
}