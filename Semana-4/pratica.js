
const exercise1 = (array) => {
  return array.join(', ');
}

console.log(exercise1(['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']));

console.log('-------------------------');
console.log('Exercicio 2:');

const exercise2 = (array, number) => {
  return array.some( arrayNumber => {return arrayNumber === number});
}

exercise2([1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127], 9) ? console.log('O valor foi encontrado no Array.') : console.log('O valor não foi encontrado no Array.');

console.log('-------------------------');
console.log('Exercicio 3:');

const exercise3 = array => {
  const positivos = array.filter((number) => {return number >= 0});
  const negativos = array.filter((number) => {return number < 0});
  const pares = array.filter((number) => {return number % 2 == 0});
  const impares = array.filter((number) => {return number % 2 != 0});
  return {positivos, pares, negativos, impares};
}

const solution3 = exercise3([1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127])
console.log(`Quantidade de números positivos: ${solution3.positivos.length}\nNúmeros positivos: ${solution3.positivos}\nQuantidade de números negativos: ${solution3.negativos.length}\nNúmeros negativos: ${solution3.negativos}\nQuantidade de números pares: ${solution3.pares.length}\nNúmeros pares: ${solution3.pares}\nQuantidade de números impares: ${solution3.impares.length}\nNúmeros impares: ${solution3.impares}\n`);

console.log('-------------------------');
console.log('Exercicio 4:');

const exercise4 = array => {
  const sum = array.reduce((acc, number) => {
    return acc + number;
  }, 0);

  return sum / array.length
}

console.log('A média é: ' + exercise4([6.1, 8, 7, 10]));

console.log('-------------------------');
console.log('Exercicio 5:');

const exercise5 = array => {
  return array.map(item => {
    return item % 2 == 0 ? item = 'X' : item; 
  })
}

console.log(exercise5([1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]));

console.log('-------------------------');
console.log('Exercicio 7:');

const exercise7 = array => {
  return array.filter(item => {
    return item.notas.every(number => {return number == 0}); 
  })
}
const solution7 = exercise7([{nome: 'Nicolas', notas: [0,0,0,0,0]},{nome: 'João', notas: [0,1,0,0,0]}, {nome: 'Murilo', notas: [9,4,3,2,1]}, {nome: 'Jone', notas: [0,0,0,0,0]}, {nome: 'Ciclano', notas: [1,2]}])

for(const name of solution7){
  console.log(name.nome);
}

console.log('-------------------------');
console.log('Exercicio 8:');

const exercise8 = (array, nome) => {
  return array.some(item => {
    return item == nome; 
  })
}

exercise8(['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla'],'Carla') ? console.log(`O nome existe no Array.`) : console.log(`O nome não existe no Array.`);