let cont = 0;
console.log('Exercicio 1:');
function sum(numbers){
  for(let i = 0; i < numbers.length; i++){
    cont += numbers[i] * i;
  }

  console.log(cont);
}

sum([5, 9, 10, 6]);
console.log('----------------------')
console.log('Exercicio 2:');

function skillTrue(user){
  console.log('Projetos ativos de ' + user.name + ':');
  for(let i = 0; i < user.projects.length; i++){
    if(user.projects[i].active){
      console.log(`${user.projects[i].name}`);
    };
  }
}

skillTrue( {
  name: "Juca",
  projects: [
  { name: "Projeto 1", start: "01/02/2021" , active: true},
  {name: "Projeto 2", start: "03/03/2021", active: false},
  {name: "Projeto 3", start: "10/08/2021", active: true},
  {name: "Projeto 4", start: "20/08/2021", active: false},
  {name: "Projeto 5", start: "18/10/2021", active: true}
  ]
})

console.log('----------------------')
console.log('Exercicio 3:');

function max(numbers){
  let maior = numbers[0];

  for(let i = 1; i < numbers.length; i++){
    if(maior < numbers[i]){
      maior = numbers[i];
    }
  }

  console.log(`O maior número do array é: ${maior}`);
}

max([6, 21, 9, 2, 50, 98, 1]);

console.log('----------------------')
console.log('Exercicio 4:');

function countWords(phrase){
  const cont = phrase.split(' ').length;
  console.log(`A frase contêm ${cont} palavras.`);
}

countWords('Meu nome é Nicolas');

console.log('----------------------')
console.log('Exercicio 5:');

function userSkills(users){
  for(let i = 0; i < users.length; i++){
    console.log(`Usuario: ${users[i].name}\nSkills:`)
    for(let j = 0; j < users[i].skills.length; j++){
      console.log(`${j}) ${users[i].skills[j]}`);
    }
  }
}
const users = [{name: "Joao", skills: ["Javascript", "ReactJS", "Redux"]},{ name: "Pedro", skills: ["VueJS", "Ruby on Rails", "Elixir"]}]
  
userSkills(users);


console.log('----------------------')
console.log('Exercicio 6:');

function  rockPaperScissorsWinner(jogador1, jogador2){
  if(jogador1 === jogador2){
    return console.log('Opa, parece que deu empate');
  }
  else if(jogador1 ===  0 &&  jogador2 === 1){
    return console.log(`Player 1 escolheu Tesoura.\nPlayer 2 escolheu Papel.\nPlayer 1 Ganhou`)
  }
  else if(jogador1 === 1 && jogador2 === 0){
    return console.log(`Player 1 escolheu Papel.\nPlayer 2 escolheu Tesoura.\nPlayer 2 Ganhou`)
  }
  else if(jogador1 === 2 && jogador2 === 1){
    return console.log(`Player 1 escolheu Pedra.\nPlayer 2 escolheu Papel.\nPlayer 2 Ganhou`)
  }
  else if(jogador1 === 1 && jogador2 === 2){
    return console.log(`Player 1 escolheu Papel.\nPlayer 2 escolheu Pedra.\nPlayer 1 Ganhou`)
  }
  else if(jogador1 === 0 && jogador2 == 2){
    return console.log(`Player 1 escolheu Tesoura.\nPlayer 2 escolheu Pedra.\nPlayer 2 Ganhou`)
  }
  else if(jogador1 === 2 && jogador2 == 0){
    return console.log(`Player 1 escolheu Pedra.\nPlayer 2 escolheu Tesoura.\nPlayer 1 Ganhou`)
  }
}

rockPaperScissorsWinner(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));