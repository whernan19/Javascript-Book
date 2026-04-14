//ear un programa en JavaScript que gestione una lista de productos usando arrays y objetos.
//crear el array de objetos
const inventario = [{ nombre: "camisa", precio: 20, stock: 10 },
  { nombre: "zapatos", precio: 50, stock: 5 }];

//Crear un nuevo array con productos cuyo precio sea >= 30
function precios(x){
    return x.precio >= 30;
}
var filtrados = inventario.filter(precios);


//Crear un nuevo array donde cada producto tenga 20% de descuento en el precio.
var nuevosProductos = inventario.map(function (num){
    return {
        nombre: num.nombre,
        precio: num.precio * 0.8,
        stock: num.stock
    }

});


//calcular el valor total del inventario
var inicial = 0;
var total = inventario.reduce(function(acumulador,producto,inicial){
    return acumulador + (producto.precio*producto.stock);
},0)
console.log("valores mayores o iguales a 30", filtrados);
console.log("");
console.log(nuevosProductos," con el 20% de descuento");
console.log("");
console.log("total del inventario ", total);