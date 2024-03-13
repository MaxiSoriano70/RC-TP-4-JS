/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
Rectángulos

*/

const cuenta = {
    titular : "Alex",
    saldo : 0,
    ingresar : function (dinero) {
        if (!isNaN(dinero) && dinero>0) {
            dinero = parseFloat(dinero);
            this.saldo += dinero;
            document.write(`Su nuevo saldo es de $${this.saldo}. <br>`);
        } else {
            document.write("Solo se puede ingresar valores numericos positivos. <br>");
        }
    },
    extraer : function (dinero) {
        if (!isNaN(dinero) && dinero>0) {
            if(dinero > this.saldo){
                document.write(`Su cuenta no cuenta con suficientes fondos para extraer $${dinero}. <br>`);
            }else{
                this.saldo -= dinero;
                document.write(`Su nuevo saldo es de $${this.saldo}. <br>`);
            }
        } else {
            document.write("Solo se puede ingresar valores numericos positivos. <br>");
        }
    },
    informar : function () {
        document.write(`SR/A. ${this.titular} su cuenta tiene un saldo de $${this.saldo}. <br>`);
    }
}