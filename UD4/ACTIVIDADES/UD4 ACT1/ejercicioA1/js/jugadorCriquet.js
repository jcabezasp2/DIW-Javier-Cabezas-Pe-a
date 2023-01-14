export default class JugadorCriquet {

    constructor(nombre, apellidos, edad, posicion, equipo, imagen) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._posicion = posicion;
        this._equipo = equipo;
        this._imagen = imagen;
    }

    get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    get edad() {
        return this._edad;
    }

    get posicion() {
        return this._posicion;
    }

    get equipo() {
        return this._equipo;
    }

    get imagen() {
        return this._imagen;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    set edad(edad) {
        this._edad = edad;
    }

    set posicion(posicion) {
        this._posicion = posicion;
    }

    set equipo(equipo) {
        this._equipo = equipo;
    }

    set imagen(imagen) {
        this._imagen = imagen;
    }

    batear() {
        console.log(`${this._nombre} batea`);
    }

    lanzar() {
        console.log(`${this._nombre} lanza`);
    }
}