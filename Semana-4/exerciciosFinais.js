/* Com o ReplaceAll troca-se todas as , por \n, o que faz com que aconteça uma quebra de linha como pedida pelo exercicio. */

const newLine = (line) => {
  return line.replaceAll(', ', '\n');
}

console.log(newLine('Maria, Paulo, Moisés, Joel, Ana'));

/* Com o ReplaceAll troca-se todas as , por . , como pedido pelo exercicio */
const point = (line) => {
  return line.replaceAll(',', '.');
}

console.log(point('Olá, mundo, meu, nome, é, Juca'));