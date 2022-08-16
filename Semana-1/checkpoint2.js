/* Exercicio 1 */
/* Utilizou-se de operador ternario com objetivo de deixar o codigo mais sucinto. */
const numero = -2 ;
console.log('Exercicio 1:');
numero >= 0 ? console.log('Positivo') : console.log('Negativo');

/* Exercicio 2 */
/* Utilizou-se o operador spread para aceitar um numero indefinido de números*/
console.log('---------------------\nExercicio 2');
function verifica(...numbers){
  let cont = 0;
  for(const number of numbers) {
    number >= 0 ? (console.log(number + ' é Positivo'), cont++) : null;
  }

  if(cont == 0){
    console.log('Nenhum dos números inseridos é positivo');
  }
}

verifica(21, -20);
/* Exercicio 3 */
/*Foi escolhido utilizar o switch para evitar o aninhamento de ifs em excesso. */
function desconto(preco, opcao){
  switch(opcao){
    case 1:
    return (preco * 0.90).toFixed(2);
    case 2:
    return (preco * 0.85).toFixed(2);
    case 3:
    return (preco).toFixed(2);
    case 4:
    return (preco * 1.10).toFixed(2);
    default:
    return 'Opção Invalida'
  }
}
const precoFinal = desconto(410.51,2)
console.log(`---------------------\nExercicio 3\nVocê irá pagar: R$ ${precoFinal}`);
