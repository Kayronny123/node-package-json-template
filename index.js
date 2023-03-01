import {countries} from './countries.js'

const pais = process.argv[2]

if(!pais){
    console.log("insira um valor")
} else {
    const listaFilter = countries.filter((item)=>{
        return item.name.toLowerCase().includes(pais.toLowerCase())
    })
    console.table(listaFilter);
}



// console.table(countries)