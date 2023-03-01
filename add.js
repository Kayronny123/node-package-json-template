import {countries} from './countries.js'

const nomePais = process.argv[2]
const sigla = process.argv[3]
if(!nomePais && !sigla){
    console.log("insira um valor")
} else {
    const novoPais={
        name: nomePais,
        code: sigla
    }
    countries.push(novoPais)
console.table(countries);
}



// console.table(countries)