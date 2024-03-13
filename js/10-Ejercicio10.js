/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
de un avión y devolverá información en caso de encontrarlo, si no lo encontró
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
de pasajeros. Los aviones tienen el método abordar el cual permite que un
pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
buscar un avión y usar el método abordar.
*/

class Aeropuerto{
    #nombre;
    #aviones;

    constructor(nombre){
        this.#nombre = nombre;
        this.#aviones = [];
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get aviones(){
        return this.#aviones;
    }

    set aviones(aviones){
        this.#aviones = aviones;
    }

    agregarAvion(avion){
        if (avion instanceof Avion) {
            this.#aviones.push(avion);
            console.log(`El avion ${avion.nombre} se a agregado correctamente.`);
        } else {
            console.log("El elemento no es una instancia de la clase Avion.");
        }
    }

    buscarAvion(nombre){
        let resp = false;
        for(let avion of this.aviones){
            if(avion.nombre == nombre){
                console.log(
                    `Avion encontrado => Nombre : ${avion.nombre}. Destino: ${avion.destino}
                    `
                );
                resp = true;
                break;
            }
        }
        if(resp == false){
            console.log(
                `
                No se ha encontrado al avion ${nombre}.
                `
            );
        }
    }
}

class Avion{
    #nombre;
    #capacidad;
    #destino;
    #listaDePasajeros;

    constructor(nombre, capacidad, destino){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaDePasajeros = [];
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get capacidad(){
        return this.#capacidad;
    }

    set capacidad(capacidad){
        this.#capacidad = capacidad;
    }

    get destino(){
        return this.#destino;
    }

    set destino(destino){
        this.#destino = destino;
    }

    get listaDePasajeros(){
        return this.#listaDePasajeros;
    }

    set listaDePasajeros(listaDePasajeros){
        this.#listaDePasajeros = listaDePasajeros;
    }

    abordar(pasajero){
        if(this.capacidad > 0){
            this.listaDePasajeros.push(pasajero);
            console.log(`El pasajero ${pasajero} abordo correctamente al avion ${this.#nombre}.`);
            this.capacidad -=1;
        }
        else{
            console.log(`Disculpe ${pasajero} el avion ${this.#nombre} no tiene lugares disponibles.`);
        }
    }
}

let aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
let avion1 = new Avion("Fly Emirates 01", 5000, "Emiratos Arabes Unidos");
let avion2 = new Avion("Fly Emirates 02", 5000, "Paris");
let avion3 = new Avion("Fly Emirates 01 Privado", 5, "Paris");
avion3.abordar("Karen Dominguez");
avion3.abordar("Celeste Severich");
avion3.abordar("Saul Goodman");
avion3.abordar("Walter White");
avion3.abordar("Jessi Pickman");
avion3.abordar("Pablo Roca");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

aeropuertoInternacional.buscarAvion("Fly Emirates 01 Privado");

aeropuertoInternacional.buscarAvion("Fly Emirates 03");