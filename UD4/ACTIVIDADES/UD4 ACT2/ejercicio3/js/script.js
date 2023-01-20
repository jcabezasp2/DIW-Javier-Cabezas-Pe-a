
const ALERTAS = document.querySelector("#alertas");

window.addEventListener('load', init);


function init() {

    document.querySelector('#btnGuardar').addEventListener('click', enviar);
    
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

    }else{
        ALERTAS.classList.remove('fade');
        ALERTAS.innerHTML = `<p>Ha habido un error al dar de alta al usuario</p>`;
        ALERTAS.classList.replace('alert-success', 'alert-danger');
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


function mensajeExito(id){
    try{
        ALERTAS.classList.replace('alert-danger','alert-success',);
    }finally{

        ALERTAS.classList.remove('fade');
        ALERTAS.innerHTML = `<p>Usuario dado de alta con el id ${id}</p>`;
    }


}

function miXHRCambiaEstado(){
  
      if((this.readyState===4)&&(this.status===200)){
        let respuesta=JSON.parse(this.responseText);
        
        mensajeExito(respuesta.id);
      
  
      }


    }
