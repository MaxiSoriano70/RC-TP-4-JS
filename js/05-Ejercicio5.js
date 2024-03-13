/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona{
    constructor(nombre, edad, sexo, peso, altura, anioDeNacimiento){
        this._nombre = nombre;
        this._edad = edad;
        this._dni = Persona.generaDNI();
        this._sexo = sexo == "H" ? "Hombre" : "Mujer";
        this._peso = peso;
        this._altura = altura;
        this._anioDeNacimiento = anioDeNacimiento;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    get dni(){
        return this._dni;
    }

    set dni(dni){
        this._dni = dni;
    }

    get sexo(){
        return this._sexo;
    }

    set sexo(sexo){
        this._sexo = sexo;
    }

    get peso(){
        return this._peso;
    }

    set peso(peso){
        this._peso = peso;
    }

    get altura(){
        return this._altura;
    }

    set altura(altura){
        this._altura = altura;
    }

    get anioDeNacimiento(){
        return this._anioDeNacimiento;
    }

    set anioDeNacimiento(anioDeNacimiento){
        this._anioDeNacimiento = anioDeNacimiento;
    }

    mostrarGeneracion(){
        if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            document.write(`${this.nombre} usted pertenece a la Generación Z. <br>`)
        }
        else if (this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            document.write(`${this.nombre} usted pertenece a la Generación Y. <br>`)
        }
        else if (this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            document.write(`${this.nombre} usted pertenece a la Generación Y. <br>`)
        }
        else if (this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            document.write(`${this.nombre} usted pertenece a la Baby Boom. <br>`)
        }
        else if (this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948){
            document.write(`${this.nombre} usted pertenece a la Silent Ganeration. <br>`)
        }
        else{
            document.write(`${this.nombre} usted pertenece a ninguna Generación. <br>`)
        }
    }

    esMayorDeEdad(){
        if(this.anioDeNacimiento >= 18){
            document.write(`${this.nombre} su edad es de ${this.edad}, usted es mayor de edad. <br>`)
        }else{
            document.write(`${this.nombre} su edad es de ${this.edad}, usted es menor de edad. <br>`)
        }
    }

    mostrarDatos(){
        document.write(`
        <h2>${this.nombre}</h2>
        <p>Edad : ${this.edad}</p>
        <p>Dni : ${this.dni}</p>
        <p>Sexo : ${this.sexo}</p>
        <p>Peso : ${this.peso}</p>
        <p>Altura : ${this.altura}</p>
        <p>Año de nacimiento : ${this.anioDeNacimiento}</p>
        `);
    }

    static generaDNI(){
        let numeroAleatorio = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        return numeroAleatorio;
    }
}

persona1 = new Persona("Karen Dominguez", 29, "F", 55.5, 1.60, 1995);
persona1.mostrarDatos();
persona1.mostrarGeneracion();