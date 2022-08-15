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

console.log('-------------------------');
console.log('Exercicio 13:');

const dev = {name: "Juca",projects: [{ name: "Projeto 1",  start: "01/02/2021" },{name: "Projeto 2", start: "03/03/2021"}]};

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)

console.log('-------------------------');
console.log('Exercicio 14:');

const myUser = { name: 'Nicolas', age: 21, email: 'nicolas@gmail.com' };
console.log(myUser);

console.log('-------------------------');
console.log('Exercicio 15:');

const alunos = [{nome: 'Marcos', notas: [10, 7, 2]},{nome: 'Michele', notas: [10, 10, 10]},{nome: 'Pedro', notas: [3, 10, 9]},{nome: 'Andressa', notas: [6, 6, 8]},{nome: 'Cristiana', notas: [7, 9, 2]}]
let media = 0;
for(let i = 0; i < alunos.length; i++){
  for(let j = 0; j < alunos[i].notas.length; j++){
    media += alunos[i].notas[j];
  }
  if((media / alunos[i].notas.length) >= 7){
    console.log(alunos[i].nome);
  }
  media = 0;
}

console.log('-------------------------');
console.log('Exercicio 16:');

const user = { name: "Marília", age:26, job: "Dev" };
const keys = Object.keys(user)
const values = Object.values(user);
for(let i = 0; i < keys.length; i++){
  console.log(`O valor da propriedade ${keys[i]} é ${values[i]}`);
}

console.log('-------------------------');
console.log('Exercicio 17:');

const isDev = [{ name: 'Marília', age: 26, job: 'Dev' },{ name: 'Juca', age: 21, job: 'RH' },{ name: 'Flávia', age: 30, job: 'Financeiro' },{ name: 'Sérgio', age: 24, job: 'Dev' }]
let linha = "";

for(let i = 0; i < isDev.length; i++){
    if(isDev[i].job == 'Dev'){
      linha += `${isDev[i].name} é Dev.`
    }
    else{
      linha += `${isDev[i].name} não é Dev.`
    }
}
console.log(linha);

console.log('-------------------------');
console.log('Exercicio 18:');

const compras = [{ nome: 'maçã', quantidade: 2, valor: 0.5},{ nome: 'alface', quantidade: 1, valor: 1.73},{ nome: 'Água 5L', quantidade: 2, valor: 5.99},{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}]
let pagar = 0;
for(let i = 0; i < compras.length; i++){
  pagar += compras[i].quantidade * compras[i].valor;
}
console.log(`R$ ${pagar.toFixed(2)}`);

console.log('-------------------------');
console.log('Exercicio 19:');

const criptografia = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']

for(let i = 0; i < criptografia.length; i++){
  criptografia[i] = criptografia[i].replaceAll('1', 'i').replaceAll('3', 'e').replaceAll('4', 'a').replaceAll('5', 's').replaceAll('0', 'o').replaceAll(' ', '');
}

console.log(criptografia)

console.log('-------------------------');
console.log('Exercicio 20:');
function CPF(cpf){
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function telefone(tel){
  return `(${tel.slice(0,2)})${tel.slice(2,7)}-${tel.slice(7,11)}`
}

const usuario = {nome: 'Cláudio  da silva figueiredo ', cpf: '47187999887', telefone:'11988754092'};

const newCPF = CPF(usuario.cpf);
const newTel = telefone(usuario.telefone);

console.log(`${usuario.nome}\n${newCPF}\n${newTel}`);