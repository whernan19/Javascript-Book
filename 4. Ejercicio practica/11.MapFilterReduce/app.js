//11.Utiliza map, filter y reduce para crear un ejemplo diferente al de la leccion 

/*The map() method of Array instances creates a new array populated with the results of 
calling a provided function on every element in the calling array. */

const array = ["hernan","ramirez","moreno"];
const mapeado = array.map((x)=> x.toLocaleUpperCase()); //convertir a mayusculas 
console.log(mapeado);

const filtrado = array.filter((x)=> x.length > 6); //Conservar nombres largos +6 letras
console.log(filtrado)

let initialValue = 0; //ver la cantidad de elementos que tiene el array, el elemento no se utiliza porque no es el contenido del array lo qe se solicita
const reductor = array.reduce((acumulador, elemento)=> acumulador +1, initialValue);
console.log(reductor);
/*Inicio = 0

Elemento: "hernan"
0 + 1 = 1

Elemento: "ramirez"
1 + 1 = 2

Elemento: "moreno"
2 + 1 = 3*/