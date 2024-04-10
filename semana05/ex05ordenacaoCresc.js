const prompt = require("prompt-sync")()
const numeros = []

for (let i = 0; i < 5; i++) {
  const numero =  parseInt(prompt(`Digite o ${i + 1}º número: `))
  numeros.push(numero)
}

const numerosCresc = numeros.slice().sort((a, b) => a - b)
console.log("Números em ordem crescente:", numerosCresc)    