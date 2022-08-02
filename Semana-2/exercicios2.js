function print(numbers){
  for(let i = 0; i < (numbers.length - 1); i++){
    console.log(`Posição ${i}: ${numbers[i]}`);
  }
}

print([1,2,3,5])