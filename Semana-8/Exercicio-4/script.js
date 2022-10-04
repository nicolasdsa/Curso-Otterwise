let number = document.querySelector(".number");
let andamento = document.querySelector(".andamento");
let resultado = document.querySelector(".resultado");

let result;
function operation(value) {
  if (number.value == "") {
    return;
  }

  if (!result) {
    result = parseFloat(number.value);
    andamento.textContent = result;
    number.value = "";
    return;
  }

  switch (value.textContent) {
    case "+":
      result += parseFloat(number.value);
      number.value = "";
      break;
    case "-":
      result -= parseFloat(number.value);
      number.value = "";
      break;
    case "/":
      result = result / parseFloat(number.value);
      number.value = "";
      break;
    case "*":
      result = result * parseFloat(number.value);
      number.value = "";
      break;
  }
  andamento.textContent = result;
}

function resultadoFunction() {
  resultado.textContent = result;
  result = null;
  andamento.textContent = "";
}

function limpar() {
  resultado.textContent = "";
  result = null;
  andamento.textContent = "";
}
