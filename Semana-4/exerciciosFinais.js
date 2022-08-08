const newLine = (line) => {
  return line.replaceAll(', ', '\n');
}

console.log(newLine('Maria, Paulo, Moisés, Joel, Ana'));

const point = (line) => {
  return line.replaceAll(',', '.');
}

console.log(point('Olá, mundo, meu, nome, é, Juca'));