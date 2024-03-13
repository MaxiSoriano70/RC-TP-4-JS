/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
*/

class rectangulo{
    constructor(ancho, alto){
        this._ancho = ancho;
        this._alto = alto;
        this.perimetro = 0;
        this.area = 0;
    }

    get ancho(){
        return this._ancho;
    }

    set ancho(nuevoAncho){
        this._ancho = nuevoAncho;
    }

    get alto(){
        return this._alto;
    }

    set alto(nuevoAlto){
        this._alto = nuevoAlto;
    }

    calcularPerimetro(){
        this.perimetro = 2*this.alto+2*this.ancho;
        document.write(`El perimetro es de ${this.perimetro}. <br>`)
    }

    calcularArea(){
        this.area = this.alto*this.ancho;
        document.write(`El are es de ${this.area}. <br>`);
    }

}