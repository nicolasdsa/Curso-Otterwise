/* Exercicio 1 */
console.log('Exercicio 1:');
function verifica(number){
  if(number % 2 == 0){
    return true;
  }
  else{
    return 'Não é par';
  }
}

const parouImpar = verifica(2);
console.log(parouImpar);

console.log('---------------------\nExercicio 2:');

function categoria(idade){
  if(!Number.isInteger(idade)){
    return console.log('Idade é apenas numeros inteiros.Tente outro número.');
  }
  if(idade >= 5 && idade <= 7){
    return console.log('Infantil A');
  }
  else if(idade >= 8 && idade <= 10){
    return console.log('Infantil B');
  }
  else if(idade >= 11 && idade <= 13){
    return console.log('Juvenil A');
  }
  else if(idade >= 14 && idade <= 17){
    return console.log('Juvenil B');
  }
  else if(idade >= 18){
    return console.log('Adulto');
  }

  else{
    return console.log('Parece que você ainda não tem idade suficiente para nadar.');
  }
}

categoria(6)