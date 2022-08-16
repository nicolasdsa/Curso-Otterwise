/* Exercicio 1 */

/* O calculo da idade se deu através de milisegundos pois assim facilitamos o calculo*/
function calcularIdade(mesDoNascimento,diaDoNascimento,anoDoNascimento){
  const dataDeNascimento = `${mesDoNascimento}/${diaDoNascimento}/${anoDoNascimento}`;
  const Idade = new Date(dataDeNascimento).getTime(); /* Transformando a data para milisegundos*/
  return Math.floor((Date.now() - Idade) / (31557600000)); /* Calculando a idade diminuindo a data atual pela Data de nascimento e dividindo pelo número de milisegundos referente a um ano */
}

const nome = 'Nicolas';
const sobrenome = 'Sosa';
const diaDoNascimento = 27;
const mesDoNascimento = 11;
const anoDoNascimento = 2000;
const primeiraNota = 8.8;
const segundaNota = 8.3;

const dataDeNascimento = `${diaDoNascimento}/${mesDoNascimento}/${anoDoNascimento}`;
const idade = calcularIdade(mesDoNascimento,diaDoNascimento,anoDoNascimento);

console.log(`Exercicio 1:\nNome Completo: ${nome} ${sobrenome}\nIdade: ${idade}\nData de Nascimento: ${dataDeNascimento}\nMédia: ${(primeiraNota + segundaNota) / 2}`);

/* Exercicio 2 */

/* Utilizando spread soma um número indefinidos de numeros. */
function soma(...numeros){
  let resultado = 0;  
  for(const numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

const resultado = soma(5,10,15);

console.log(`-------------------------\nExercicio 2:\nResultado da soma: ${resultado}`);