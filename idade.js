const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(idade) + 7

console.log(`Olá ${nome}, você tem ${idade}. Em 7 anos você tera ${novaIdade}`)
