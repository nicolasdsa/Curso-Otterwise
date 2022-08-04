// Calculadora atraves de uma função, foi utilizada um arrow function junto ao um operador switch para uma melhor legibilidade e organização do código.

const calculadora = (operation, num1, num2) => {
    switch(operation){
        case 'soma':
            return console.log(num1 + num2);
        case 'subtrai':
            return console.log(num1 - num2);
        case 'divide':
            return console.log(num1 / num2);
        case 'multiplica':
            return console.log(num1 * num2);
        default:
            return console.log('Operação Invalida');
    }
}


console.log('Exercicio 1:');
calculadora('soma', 3, 5);


// Verificar se é maior de idade, tentou se utilizar a maioria dos conceitos aprendidos na semana, como arrow function, operador ternario e Destructing
const verifyAge = ({name, idade}) => {
    return idade >= 18 ? console.log(`${name} é maior de idade.`) : console.log(`${name} é menor de idade.`);
}
console.log('-------------------------');
console.log('Exercicio 2:');
verifyAge({name: 'Juca', idade: 20});