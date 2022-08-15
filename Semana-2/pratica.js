for(let i = 1; i <= 25; i++){
  console.log(i);
}
console.log('-------------------------');
console.log('Exercicio 2:');

for(let i = 10; i <= 200; i += 10){
  console.log(i);
}

console.log('-------------------------');
console.log('Exercicio 3:');

const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let phrase = "";
for(let i = 0; i < names.length; i++){
  if(i == (names.length - 1)){
    phrase += names[i]
  }
  else{
    phrase += names[i] + ", ";
  }
}
console.log(phrase);

console.log('-------------------------');
console.log('Exercicio 4:');

const number = 5;

for(let i = 1; i <= 10; i++){
  console.log(`${number} X ${i} = ${number * i}`);
}

console.log('-------------------------');
console.log('Exercicio 5:');

const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    console.log(numbers[i]);
  }
}

console.log('-------------------------');
console.log('Exercicio 6:');

const numeros = [-5,0,-3,-4,12]

let positive = 0;
let negative = 0;
let even = 0;
let odd  = 0;

for (let i = 0; i < numeros.length; i++){
  if(numeros[i] > 0){
    positive++;
  }
  else if(numeros[i] < 0){
    negative++;
  }
  if(numeros[i] % 2 == 0){
    even++;
  }
  else if(numeros[i] % 2 != 0){
    odd++;
  }
}

console.log(`${even} valor(es) par(es)\n${odd} valor(es) impar(es)\n${positive} valor(es) positivo(s)\n${negative} valor(es) negativo(s)`);

console.log('-------------------------');
console.log('Exercicio 7:');

const num = 7;

for (let i = 1; i <= (num * 4); i += 4){
  console.log(`${i} ${i + 1} ${i + 2} PUM`);
};

console.log('-------------------------');
console.log('Exercicio 8:');

const nums = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

for (let i = 0; i < nums.length; i++){
  console.log(nums[i] * 10);
}

console.log('-------------------------');
console.log('Exercicio 9:');

let soma = 0;
let num9 = 10
for (let i = 1; i <= num9; i++){
  soma += i;
}
console.log(soma)

console.log('-------------------------');
console.log('Exercicio 10:');

let sum = 0;
const notas = [6, 8, 7];

for (let i = 0; i < notas.length; i++){
  sum += notas[i];
}
console.log(sum / notas.length);

console.log('-------------------------');
console.log('Exercicio 11:');

const nomes = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla'];
const nome = 'Carla';
let boolean = false;
for (let i = 0; i < nomes.length; i++){
  if(nomes[i] == nome){
    boolean = true;
  }
}
if(!boolean){
  console.log(`${nome} não existe no array.`);
}
else{
  console.log(`${nome} existe no array.`);
}

console.log('-------------------------');
console.log('Exercicio 12:');

const verify = [1,2,3,4,-5,6,7,8,9,10];
let menor = verify[0];
let position = 0;
for(let i = 1; i < verify.length; i++){
  if(menor > verify[i]){
    menor = verify[i];
    position = i;
  }
}
console.log(`Menor valor: ${menor}\nPosição: ${position}`);