//Crea una funcion sunmanyTimes(multiplier, ...numbers) 
// que primero sume todos los numeros (usando parametros rest) 
// y luego multipliique el resultado por multiplier
function sumanyTimes(multiplier, ...numbers){
    let total = 0;
    //recorrer el array de numbers 
    for(const arg of numbers){
        total += arg; //donde total va sumar el valor del argumento recorrido
    }
    return total * multiplier;

}

const resultado = sumanyTimes(2,1);
console.log(`El total de la multiplicacion y toda la suma es ${resultado}`);