//7. Desarrolla una funcion parcial 
function ParcialFunct(a,b){ //creamos la funcion principal con 2 parametros
    
    let resultado = a+b; //obtenemos la suma total

    function PartialRest(c){ //funcion con un parametro extra 
        let total = resultado +c; //sumamos el resultado de la funcion principal exterior con la interna 
        return total; //devolvemos el total de la suma de los 3 parametros
    }
    return PartialRest; //devolvemos la funcion para luego ejecutarla.
}
console.log(ParcialFunct(1,2)(4)); //resultado de la funcion parcial