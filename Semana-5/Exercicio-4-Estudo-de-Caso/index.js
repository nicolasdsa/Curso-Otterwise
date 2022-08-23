import { input } from "console-input";
import fs from "fs";
import axios from "axios";

const cepBusca = () => input("Digite o CEP que esta buscando:");

const json = (arquivo, data) => {
  const toString = JSON.stringify(data);
  fs.writeFileSync(arquivo, toString)};

const search = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;

  } catch (error) {
    console.log(error);

  }
};

const principal = async () => {
  try {
    const cep = cepBusca();
    const endereco = await search(cep);
    json("endereco.json", endereco);
  } catch (error) {
    console.log(error);
  }
};

const randomCep = () => {
  let randomCeps = []
  for(let i = 0; i < 20; i++){

    randomCeps.push(Math.floor(Math.random() * (29099999 - 29000000 ) + 29000000));
  }
  return randomCeps
}
const listCeps = randomCep();

console.log(listCeps);

principal();







