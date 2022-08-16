// Aqui fazemos uma calculadora com uso um pouco mais aprofundado a respeito de função, que se trata de funções como retorno de funções. Como pedido no exemplo do exercício.

const calculadora = (operation) => {
    switch(operation){
        case 'soma':
            return function (num1) {
                return function (num2) {
                    return num1 + num2;
                }
            }
        case 'subtrai':
            return function (num1) {
                return function (num2) {
                    return num1 - num2;
                }
            }
        case 'divide':
            return function (num1) {
                return function (num2) {
                    return num1 / num2;
                }
            }
        case 'multiplica':
            return function (num1) {
                return function (num2) {
                    return num1 * num2;
                }
            }
        default:
            return console.log('Operação Invalida');
    }
}


console.log('Exercicio 1:');
console.log(calculadora('soma')(3)(5));


// Verificar se é maior de idade, tentou se utilizar a maioria dos conceitos aprendidos na semana, como arrow function, operador ternario e Destructing
const verifyAge = ({name, idade}) => {
    return idade >= 18 ? console.log(`${name} é maior de idade.`) : console.log(`${name} é menor de idade.`);
}
console.log('-------------------------');
console.log('Exercicio 2:');
verifyAge({name: 'Juca', idade: 20});