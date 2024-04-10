const prompt = require("prompt-sync")()
const numeros = []

for (let i = 0; i < 5; i++) {
  const numero =  parseInt(prompt(`Digite o ${i + 1}º número: `))
  numeros.push(numero)
}

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

console.log("Valor total da soma dos números é= ", soma)
