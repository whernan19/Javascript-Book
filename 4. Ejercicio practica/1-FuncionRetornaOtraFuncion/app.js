//1. Crea una funcion que retorne a otra funcion. 
/*
Closures

Un closure es la combinación de una función agrupada (dentro de otra) 
con referencias a su estado adyacente (el entorno léxico). 
En otras palabras, un closure te da acceso al alcance de una función externa desde una función interna. 
En JavaScript, los closure se crean cada vez que se crea una función, en el momento de la creación de la función
 */
function Imprimir(nombre){
    
    return function expresion(apellido){
        console.log(`Mi nombre es: ${nombre} ${apellido}`);
    }
    
}
const result = Imprimir("hernan");
result("ramirez");