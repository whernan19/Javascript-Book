//Haz uso del this lexico 
class Persona {
    constructor(name){
        this.name = name;
    }
    saludo(){
        const imprimir = () => {
            console.log(`Hello, my name is ${this.name}`);
        }
        imprimir();
    }
}

const hernan = new Persona("Hernan");
hernan.saludo();