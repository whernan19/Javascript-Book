//3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a un exponente
function recursividad(base, exponente){
    //condicion para parar el bucle infinito
    if(exponente ===0){
        return 1
    }
    return base * recursividad(base,exponente-1)

}
console.log(recursividad(3,3))