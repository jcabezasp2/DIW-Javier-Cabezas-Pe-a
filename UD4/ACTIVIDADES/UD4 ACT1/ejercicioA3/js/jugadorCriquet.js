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

    toHTML() {
        let div = document.createElement('div');
        div.classList.add('col');
        
        div.innerHTML = `
            <div class="card">
                <img src="${this._imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${this._nombre} ${this._apellidos}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Edad: ${this._edad}</li>
                        <li class="list-group-item">Posicion: ${this._posicion}</li>
                        <li class="list-group-item">Equipo: ${this._equipo}</li>     
                    </ul>
                </div>
            </div>`

    return div;
    }

}