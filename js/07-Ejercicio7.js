/*
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar más contactos indicar por pantalla.
● existeContacto(Contacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un
prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
mostrar en pantalla y por consola.
*/

class Contacto{
    #nombre;
    #numeroTelefono;
    constructor(nombre, numeroTelefono){
        this.#nombre = nombre;
        this.#numeroTelefono = numeroTelefono;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get numeroTelefono(){
        return this.#numeroTelefono
    }

    set numeroTelefono(numeroTelefono){
        this.#numeroTelefono = numeroTelefono;
    }
}

class Agenda{
    #contactos;
    #tamanio;
    constructor(tamanio = 10){
        this.#contactos = [];
        this.#tamanio = tamanio;
    }

    get contactos(){
        return this.#contactos;
    }

    set contactos(contactos){
        this.#contactos = contactos;
    }

    get tamanio(){
        return this.#tamanio;
    }

    set tamanio(tamanio){
        this.#tamanio = tamanio;
    }

    aniadirContacto(contacto){
        if (contacto instanceof Contacto) {
            if(this.agendaLlena()){
                console.log("La agenda está llena. No se puede agregar más contactos.");
            }
            else if(this.existeContacto(contacto)){
                console.log("El contacto ya existe en la agenda.")
            }
            else{
                this.contactos.push(contacto);
                this.tamanio = this.tamanio - 1;
                console.log("¡Contacto agregado!");
            }
        } else {
            console.log("El elemento no es una instancia de la clase Contacto.");
        }
    }

    existeContacto(contacto){
        let resp = false;
        for(let contactoAgendado of this.contactos){
            if(contactoAgendado.nombre == contacto.nombre){
                resp = true;
                break;
            }
        }
        return resp;
    }

    listarContactos(){
        console.log(
            `CONTACTOS AGENDADOS`
        );
        for(let contacto of this.contactos){
            console.log(
                `Nombre : ${contacto.nombre}. Numero: ${contacto.numeroTelefono}`
            );
        }
    }

    buscarContacto(nombre){
        let resp = false;
        for(let contacto of this.contactos){
            if(contacto.nombre == nombre){
                console.log(
                    `
                    Contacto encontrado.
                    Nombre : ${contacto.nombre}. Numero: ${contacto.numeroTelefono}
                    `
                );
                resp = true;
                break;
            }
        }
        if(resp == false){
            console.log(
                `
                No se ha encontrado a ${nombre}.
                `
            );
        }
    }

    eliminarContacto(nombre) {
        let indice = -1;
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            this.tamanio += 1;
            console.log(`El contacto ${nombre} ha sido eliminado de la agenda.`);
        } else {
            console.log(`El contacto ${nombre} no existe en la agenda.`);
        }
    }

    agendaLlena() {
        return this.tamanio <=0;
    }

    huecosLibres() {
        return this.tamanio;
    }

    mostrarMenu() {
        let opcion;
        do {
            opcion = prompt(`Menú de Agenda:
            1. Agregar contacto
            2. Listar contactos
            3. Buscar contacto
            4. Eliminar contacto
            5. Ver si la agenda está llena
            6. Ver cuántos huecos libres hay
            7. Salir
            Seleccione una opción:`);

            switch (opcion) {
                case '1':
                    let nombre = prompt("Ingrese el nombre del contacto:");
                    let numero = prompt("Ingrese el número de teléfono del contacto:");
                    let nuevoContacto = new Contacto(nombre, numero);
                    this.aniadirContacto(nuevoContacto);
                    break;
                case '2':
                    this.listarContactos();
                    break;
                case '3':
                    let nombreBuscar = prompt("Ingrese el nombre del contacto:");
                    this.buscarContacto(nombreBuscar);
                    break;
                case '4':
                    let nombreEliminar = prompt("Ingrese el nombre del contacto:");
                    this.eliminarContacto(nombreEliminar);
                    break;
                case '5':
                    if (this.agendaLlena()) {
                        console.log("La agenda está llena.");
                    } else {
                        console.log("La agenda no está llena.");
                    }
                    break;
                case '6':
                    console.log(`Huecos libres en la agenda: ${this.huecosLibres()}`);
                    break;
                case '7':
                    console.log("Saliendo del programa...");
                    break;
                default:
                    console.log("Opción inválida. Por favor, seleccione una opción válida.");
            }
        } while (opcion !== '7');
    }
}

let contacto1 = new Contacto("Walter", "3874852369");
let contacto2 = new Contacto("Saul", "3875963258");

let miAgenda = new Agenda(5);
miAgenda.aniadirContacto(contacto1);
miAgenda.aniadirContacto(contacto2);

miAgenda.mostrarMenu();