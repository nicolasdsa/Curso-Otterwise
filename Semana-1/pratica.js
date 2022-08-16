console.log('Meu nome é Nicolas e eu estou cursando Ciência da computação.');

console.log('-------------------------');
console.log('Exercicio 2:');

const Otterwise = 'Otter' + 'wise';
console.log(Otterwise);

console.log('-------------------------');
console.log('Exercicio 3:');

const nome = 'Nicolas';
const sobrenome = 'Machado';
console.log(nome + ' ' + sobrenome);

console.log('-------------------------');
console.log('Exercicio 4:');
console.log(42 * -3.14);

console.log('-------------------------');
console.log('Exercicio 5:');
const valor1 = 10;
const valor2 = 5;
const resultado = valor1 + valor2;
console.log(resultado);

console.log('-------------------------');
console.log('Exercicio 6:');
const salario = 5000;
const comissão = 100000;
const porcentagem = 10;
console.log('Valor Mensal:R$ ' + (salario + comissão * (porcentagem / 100)));

function exercicio7(valor1, valor2, temp){
  console.log('Valor 1 = '+ valor1);
  console.log('Valor 2 = '+ valor2);
  temp = valor1;
  valor1 = temp;
  valor1 = valor2;
  valor2 = temp;
  console.log('Valor 1 = '+ valor1);
  console.log('Valor 2 = '+ valor2);
  return;
}
console.log('-------------------------');
console.log('Exercicio 7:');
const Valor1 = 3;
const Valor2 = 12;
const temp = 0;
exercicio7(Valor1, Valor2, temp);

console.log('-------------------------');
console.log('Exercicio 8:');
const km = 240;
const velocidade = 80;
const combustivel = 20;
console.log('Média de consumo: ' + (km / combustivel) + ' km/l');
console.log('Tempo de viagem: ' + (km / velocidade) + ' horas');

console.log('-------------------------');
console.log('Exercicio 9:');
const cliente = 'Nicolas';
const idade = 21;
if(idade >= 18){
  console.log(cliente + ' é maior de idade');
}
else{
  console.log(cliente + ' é menor de idade');
}

console.log('-------------------------');
console.log('Exercicio 10:');
const numero1 = 2;
const numero2 = 4;
if (numero1 > numero2){
  console.log(numero1 + ' é maior que ' + numero2);
}
else if (numero2 > numero1){
  console.log(numero2 + ' é maior que ' + numero1);
}
else{
  console.log(numero2 + ' é igual a ' + numero1);
}

console.log('-------------------------');
console.log('Exercicio 11:');
const A = 5;
const B = 5;
const C = 5;

if(A != B && B != C && C != A){
  console.log("TRIANGULO ESCALENO");
}
else if(A == B && B == C){
  console.log("TRIANGULO EQUILATERO");
}
else if(A == B || A == C || B == C){
  console.log("TRIANGULO ISOSCELES");
}

console.log('-------------------------');
console.log('Exercicio 12:');

const nomeCompleto = 'Nicolas Machado';
const Servidor = true;
const Professor = false;

if(Servidor && !Professor){
  console.log(nomeCompleto + ', você tem acesso a nossa linha de crédito para servidores.')
}
else if(Professor && Servidor){
  console.log('Parabéns ' + nomeCompleto + '! Você tem acesso a nossa linha de crédito especial!');
}
else{
  console.log(nomeCompleto + ' infelizmente você não tem uma linha de crédito disponível.');
}

console.log('-------------------------');
console.log('Exercicio 13:');

const number = 9
if(number % 2 == 0){
  console.log('par');
}
else{
  console.log('impar');
}

console.log('-------------------------');
console.log('Exercicio 22:');

let cedulas = 576; 

let resto100 = cedulas % 100;
let notas100 = (cedulas - resto100)/ 100;

let resto50 = resto100 % 50;
let notas50 = (resto100 - resto50) / 50;

let resto20 = resto50 % 20;
let notas20 = (resto50 - resto20) / 20;

let resto10 = resto20 % 10;
let notas10 = (resto20 - resto10) / 10;

let resto5 = resto10 % 5;
let notas5 = (resto10 - resto5) / 5;

let resto2 = resto5 % 2;
let notas2 = (resto5 - resto2) / 2;

let notas1 = resto2;

console.log(`${cedulas}
${notas100} nota(s) de R$ 100,00
${notas50} nota(s) de R$ 50,00
${notas20} nota(s) de R$ 20,00
${notas10} nota(s) de R$ 10,00
${notas5} nota(s) de R$ 5,00
${notas2} nota(s) de R$ 2,00
${notas1} nota(s) de R$ 1,00`);