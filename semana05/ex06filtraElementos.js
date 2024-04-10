const prompt = require("prompt-sync")()
const numeros = []

for (let i = 0; i < 5; i++) {
  const numero =  parseInt(prompt(`Digite o ${i + 1}º número: `))
  numeros.push(numero)
}

const numPar = numeros.filter(numero => numero % 2 === 0)
numPar.sort((a, b) => a - b)

console.log("Lista de números pares:", numPar)