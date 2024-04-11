async function getUserInfo() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return {
        nome: "Max",
        idade: 32,
        email: "maxtxra@estudante.sesisenai.org.br",
        github: "https://github.com/maxtxra"
    }
}

async function showUserInfo() {
    try {
        
        const userData = await getUserInfo();

        console.log("Nome:", userData.nome)
        console.log("Idade:", userData.idade)
        console.log("Email:", userData.email)
        console.log("Github profile:", userData.github)
    } catch (error) {
        console.error("Não foi possível obter os dados solicitados:", error)
    }
}

showUserInfo();
