//Crear una clase en JavaScript
//  que maneje una lista de elementos y 
// que implemente métodos similares a los de un array (filter, map, find).

/*REQUERIMIENTOS

* Crear una clase llamada Galeria
* Debe recibir una lista de elementos en el constructor
* Debe guardar esos elementos internamente usando this
* Método: filtrarPorTipo(tipo)
* Recibe un parámetro tipo
Debe recorrer los elementos
Debe devolver un nuevo arreglo con los elementos que coincidan con ese tipo
No usar filter
Método: obtenerNombres()
No recibe parámetros
Debe recorrer los elementos
Debe devolver un arreglo solo con los nombres
No usar map
Método: buscar(nombre)
Recibe un parámetro nombre
Debe recorrer los elementos
Debe devolver el primer objeto que coincida
Si no encuentra nada, devolver null o undefined
No usar find
Uso de la clase
Crear una lista de datos con varios elementos
Crear una instancia de la clase Galeria
Ejecutar los métodos y mostrar resultados con console.log */

//Crear una clase llamada Galeria
class Galeria{
    constructor(tipo, nombre){
        //Debe recibir una lista de elementos en el constructor, Debe guardar esos elementos internamente usando this
        this.tipo = tipo;
        this.nombre = nombre;

    }
    //Método: filtrarPorTipo(tipo)
    const filtrarPorTipo(tipo){
        
    }
}
