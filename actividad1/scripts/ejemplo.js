/*let bebidas = ['leche', 'cacao', 'te'];
for (let i = 0; i < bebidas.length; i++) {
    console.log(bebidas[i]);
}


bebidas.forEach ((item,i)=>{
    console.log(item,i);
});

bebidas.map(function(item, i){
    console.log(item,i);
})*/
//objetos vacios mapas a traves de objetos mapas mediante la creacion de objteos
/*const precios = {};
const resultados ={
    'juan': 100,
    'maria': 88,
    'luis':91
};
console.log(resultados['juan']);*///100

/*1. objectName[property]
2. objectName.property
(El segundo sólo funciona para claves de cadena). */
/*
const resultados1 ={
    juan: 100,
    maria: 88,
    luis: 91
};

console.log(resultados['juan']); //100
console.log(resultados.luis);
*/
/*Para añadir una propiedad a un objeto, hay que nombrar la propiedad y darle un valor: */

const resultados ={
    juan:100,
    maria: 88,
    luis: 91
};

resultados.pedro = 72;
let nombre = 'azucena';
resultados[nombre] = 102;
//para elminar una propiedad a un objeto delete
delete resultados.maria;
console.log(resultados);

for (let nombre in resultados) {
    console.log(nombre + ' tiene ' + resultados[nombre]);
    }
/**No se puede usar for...in en listas; sólo en tipos de objetos
- No se puede usar for...of en objetos; sólo en tipos de listas */