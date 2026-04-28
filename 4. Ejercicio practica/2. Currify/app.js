//2. Implementa una funcion currificada que multiplique 3 numeros
function primera(num1){
    return function segunda(num2){
        return function tercera(num3){
            return num1*num2*num3;
        }
    }
}

console.log(primera(1)(4)(3))
