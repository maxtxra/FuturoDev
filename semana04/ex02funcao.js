const prompt = require('prompt-sync')()

function checkpar(numero) {
    if (numero % 2 === 0) {
        return "O numero " + numero + " é par"
    } else {
        return `O número ${numero} é impar`
    }
}

const numUser = parseInt(prompt("Digite um número: "));
console.log(checkpar(numUser));
