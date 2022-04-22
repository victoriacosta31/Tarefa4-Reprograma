// For/Break/Continue 	Utilize a estrutura de repetição for para 
//imprimir no console conforme instruções:

// a) números de 1 a 50 
console.log('Início')
for (let contador = 1; contador <=  50; contador ++){
console.log(contador)
}
console.log('Fim')

// b) quando chegar no número 25 interrompa a instrução e pare o loop

console.log('Início')
for (let contador = 1; contador <=  50; contador ++){
       console.log(contador);
    if (contador === 25){
        break;
    }
    }
    console.log('Deu o break')
    console.log('Fim')

// c) números de 1 a 50, quando chegar no número 10 pule a instrução


for (let contador = 1; contador <= 50; contador ++ ){
if (contador === 10){
    console.log('Continue');
    continue;    
}

console.log('Contando' + ' ' + contador);
}
