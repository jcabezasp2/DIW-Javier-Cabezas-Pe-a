
const MODAL = document.querySelector("#modal");

window.addEventListener('load', init);


function init() {

    document.querySelector('#btnGuardar').addEventListener('click', enviar);
    document.querySelector('#spinner').style.display = 'none';

    let botonesCerrar = document.querySelectorAll('.cerrar');

    botonesCerrar.forEach((boton) => {
        boton.addEventListener('click', () => {
            MODAL.classList.remove('show');
            MODAL.style.display = 'none';
            document.querySelectorAll('.borrable').forEach((item) => {
                item.removeChild(item.firstChild);
            })
        })
    })
}



function enviar(event) {
    event.preventDefault();

    if(validar()){
        
        let firstName = document.querySelector('#txtNombre').value;
        let lastName = document.querySelector('#txtApellidos').value;
        let age = document.querySelector('#txtEdad').value;
        let email = document.querySelector('#txtEmail').value;
        let image = document.querySelector('#txtUrl').value;

        let newUser = {firstName, lastName, age, email, image};

        let miXHR=new XMLHttpRequest();
        miXHR.onreadystatechange=miXHRCambiaEstado;

        let url=`https://dummyjson.com/users/add`;
    
        miXHR.open("POST",url);
        miXHR.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        miXHR.send(JSON.stringify(newUser));

    }




}

function validar(){

    let form = document.querySelector('form');
    form.classList.replace('needs-validation', 'was-validated')

    let inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="url"]');


    let validado = true;
    inputs.forEach((input) => {
        if(!input.checkValidity()){
            validado = false
        }
    })
    
    return validado;
}


function mensajeExito(respuesta){
    
    MODAL.classList.add('show');
    MODAL.style.display = 'block';
    document.querySelector('#nombreModal').appendChild(document.createTextNode(respuesta.firstName));
    document.querySelector('#apellidosModal').appendChild(document.createTextNode(respuesta.lastName));
    document.querySelector('#edadModal').appendChild(document.createTextNode(respuesta.age));
    document.querySelector('#mailModal').appendChild(document.createTextNode(respuesta.email));
    document.querySelector('#imagenModal').setAttribute('src', respuesta.image);

}

function miXHRCambiaEstado(){
    
        document.querySelector('#spinner').style.display = 'block';

      if((this.readyState===4)&&(this.status===200)){
        let todo=JSON.parse(this.responseText);
        document.querySelector('#spinner').style.display = 'none';
        mensajeExito(todo);
      
      }


    }
