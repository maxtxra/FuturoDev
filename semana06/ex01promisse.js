const prompt = require('prompt-sync')()

const numeroPrompt = parseInt(prompt("Digite um número para verificar: "))

function checkpar(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Número válido é par")
        } else {
            reject(new Error("Error: número informado é ímpar"))
        }
    });
}



checkpar(numeroPrompt)
    .then(msg => {
        console.log(msg)
    })
    .catch(error => {
        console.error(error.message)
    });
