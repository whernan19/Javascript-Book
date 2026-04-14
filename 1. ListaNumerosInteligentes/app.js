/*Desarrollar un programa en JavaScript que procese un arreglo de números 
utilizando métodos de arrays aprendidos desde la documentación oficial.


REQUERIMIENTOS FUNCIONALES
Definir un array base
Crear un array con al menos 5 números


Duplicar los números
Crear un nuevo array donde cada número sea multiplicado por 2
NO modificar el array original

Filtrar números pares
Crear un nuevo array que contenga solo los números pares

Calcular la suma total
Obtener la suma de todos los números del array original

Array original: [1, 2, 3, 4, 5]
Duplicados: [2, 4, 6, 8, 10]
Pares: [2, 4]
Suma total: 15

*/
let numeros = [1,2,3,4,5]; //creamos el arreglo de numeros
var copiaNumeros = numeros.map(function (x){//crea los numeros duplicados del array

    return x * 2;
})
//filtrar numeros pares 
function numerosPares(elemento){
    return elemento % 2 === 0;
}
var filtrados = copiaNumeros.filter(numerosPares);

//suma total 
const valorinicial = 0;
const sumInitial = numeros.reduce((acumulador,actual) => acumulador + actual, valorinicial,);
// MOSTRAR TODO EN CL
console.log("Array original:", numeros);
console.log("Duplicados:", copiaNumeros);
console.log("Pares:", filtrados);
console.log("suma total:", sumInitial);