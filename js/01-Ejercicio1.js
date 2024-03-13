/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
    color : "Negro",
    marca : "Mazda",
    modelo : "RX7",
    encendidoApagado : false,
    encender : function (){
        this.encendidoApagado = true;
        document.write("El auto esta encendido.<br>");
    },
    apagar : () =>{
        this.encendidoApagado = false;
        document.write("El auto esta apagado.<br>");
    }
}