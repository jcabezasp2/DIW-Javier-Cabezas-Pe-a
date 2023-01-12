
let jugadores = [];

window.addEventListener('load', init);


function init() {

    document.querySelector('#btnGuardar').addEventListener('click', enviar);
    

}



function enviar(event) {
    event.preventDefault();

    if(validar()){
        
    } 




}

function validar(){

    let form = document.querySelector('form');
    form.classList.replace('needs-validation', 'was-validated')

    let inputs = document.querySelectorAll('input');
    let validado = true;
    inputs.forEach((input) => {
        if(!input.checkValidity()){
            validado = false
        }
    })
    return validado;
}



