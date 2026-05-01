//Crea un callback que se invoque con el resultado de la suma de todos los numeros
//  que se le pasan a una funcion


//Una función de callback es una función que se pasa a otra función como un argumento, 
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción
function sumatotal(callb,...numbers){
    let total = 0;
    for(const element of numbers) {
        total += element;
    }
    callb(total);
    

}
function callback(total){
        console.log(`El resultado es: ${total}`);
    }

sumatotal(callback, 1,2,3);