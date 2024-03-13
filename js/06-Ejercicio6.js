/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
    constructor(isbn, titulo, autor, numeroDePaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
    }

    get isbn(){
        return this._isbn;
    }

    set isbn(isbn){
        this._isbn = isbn;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(autor){
        this._autor = autor;
    }

    get numeroDePaginas(){
        return this._numeroDePaginas;
    }

    set numeroDePaginas(numeroDePaginas){
        this._numeroDePaginas = numeroDePaginas;
    }

    mostrarLibro(){
        document.write(`
        <p>
            El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroDePaginas}.
        </p>
        `);
    }
}

libro1 = new Libro("71717171", "Orgullo y prejuicio", "Jane Austen", 3410);
libro1.mostrarLibro();

libro2= new Libro("81818181", "Cien años de soledad", "Gabriel García Márquez", 4690);
libro2.mostrarLibro();

if(libro1.numeroDePaginas > libro2.numeroDePaginas){
    document.write(`El libro ${libro1.titulo} tiene mas paginas que el ${libro2.titulo}. <br>`);
}
else if(libro1.numeroDePaginas < libro2.numeroDePaginas){
    document.write(`El libro ${libro2.titulo} tiene mas paginas que el ${libro1.titulo}. <br>`);
}
else{
    document.write(`El libro ${libro2.titulo} y ${libro1.titulo} tiene la misma cantidad de paginas. <br>`);
}