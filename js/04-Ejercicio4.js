/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }

    get codigo(){
        return this._codigo;
    }

    set codigo(nuevocodigo){
        this._codigo = nuevocodigo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevonombre){
        this._nombre = nuevonombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(nuevoprecio){
        this._precio = nuevoprecio;
    }

    imprimirDatos(){
        document.write(`
            <h2>${this.nombre}</h2>
            <p>Codigo : ${this._codigo}</p>
            <p>Precio : ${this._precio}</p>
        `);
    }
}

productos = [];

producto1 = new Producto(61616,"Led",15000);
producto2 = new Producto(71717,"Pelota",1500);
producto3 = new Producto(81818,"Teclado",15500);
producto4 = new Producto(91919,"Mouse",10000);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);

for(let producto of productos){
    producto.imprimirDatos();
}