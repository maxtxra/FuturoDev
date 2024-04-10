const prompt = require("prompt-sync")()
const numeros = []

for (let i = 0; i < 5; i++) {
  const numero =  parseInt(prompt(`Digite o ${i + 1}º número: `))
  numeros.push(numero)
}

const numquad = numeros.map(numero => numero ** 2)
console.log("Valor ao quadrado dos números inseridos é= ", numquad)