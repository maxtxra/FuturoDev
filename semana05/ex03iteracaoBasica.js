const prompt = require('prompt-sync')()
const frutas = []
for (let i = 0; i < 4; i++) {
    const fruta = prompt(`Digite a ${i + 1}ª fruta: `)
    frutas.push(fruta)
}
frutas.shift() // remove o primeiro item do array
console.log(`Lista de frutas = ${frutas}`)