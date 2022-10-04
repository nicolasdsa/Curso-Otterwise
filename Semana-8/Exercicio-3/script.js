let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let result = document.querySelector(".result");
const calcular = async () => {
  let operation = document.querySelector('input[name="operacao"]:checked');

  if (number1.value == "" || number2.value == "") {
    console.log("Numeros invalidos");
    return;
  }

  if (!operation) {
    console.log("Nenhuma operação valida");
    return;
  }

  switch (operation.value) {
    case "somar":
      result.textContent = `${
        parseFloat(number1.value) + parseFloat(number2.value)
      }`;
      break;
    case "subtrair":
      result.textContent = `${
        parseFloat(number1.value) - parseFloat(number2.value)
      }`;
      break;
    case "multiplicar":
      result.textContent = `${
        parseFloat(number1.value) * parseFloat(number2.value)
      }`;
      break;
    case "dividir":
      result.textContent = `${
        parseFloat(number1.value) / parseFloat(number2.value)
      }`;
      break;
  }
};
