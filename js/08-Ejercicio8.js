/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse".
*/

class Persona{
    #nombre;
    #edad;
    #profesion;

    constructor(nombre,  edad, profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get edad(){
        return this.#edad;
    }

    set edad(edad){
        this.#edad = edad;
    }

    get profesion(){
        return this.#nombre;
    }

    set profesion(profesion){
        this.#profesion = profesion;
    }

    saludar(){
        console.log(`${this.#nombre} esta saludando.`)
    }

    despedirse(){
        console.log(`${this.#nombre} se esta despidiendo.`)
    }
}

let persona1 = new Persona("Celeste", 26, "Quimico");
let persona2 = new Persona("Karen", 30, "Economista");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();