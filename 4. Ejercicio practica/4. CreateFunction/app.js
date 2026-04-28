//4. Crea una funcion CreateCounter() que reciba un valor inicial y 
// retorne un objeto con metodos para increment(), decrement() y getValue(), 
// utilizando un closure para mantener el estado
function CreateCounter(valorInicial){
    var estado = valorInicial;
    
    var MyObj = {
        increment: function (){
            return estado = estado +1;
        },
        decrement: function(){
            return estado = estado -1;
        },
        getValue: function(){
            return estado;
        }

    }
    return MyObj;
}
const prueba = CreateCounter(10);
console.log(prueba.increment());
console.log(prueba.decrement());
console.log(prueba.getValue());