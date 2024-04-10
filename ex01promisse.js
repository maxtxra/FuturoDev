const prompt = require('prompt-sync')()

function checkpar(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Número válido é par")
        } else {
            reject(new Error("Error: número informado é ímpar"))
        }
    });
}

const numeroPrompt = parseInt(prompt("Digite um número para verificar: "))

checkpar(numeroPrompt)
    .then(msg => {
        console.log(msg)
    })
    .catch(error => {
        console.error(error.message)
    });
