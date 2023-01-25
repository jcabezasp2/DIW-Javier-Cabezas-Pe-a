const uri = 'https://yesno.wtf/api';

window.addEventListener('load', init);
let preguntaRealizada = false;
const pregunta = document.querySelector('#txtPregunta');
const responder = document.querySelector('#btnRespuesta');
const respuesta = document.querySelector('#btnPregunta');
const resultado = document.querySelector('#resultado');

function init() {

    responder.addEventListener('click', () => {
        if (pregunta.value == '') {
            alert('Debes introducir una pregunta');
        } else {
            if (!preguntaRealizada) {
                preguntar();
                preguntaRealizada = true;
            } else {
                alert('Ya has realizado una pregunta');
            }
        }
    });
    respuesta.addEventListener('click', () => {
        pregunta.value = '';
        resultado.innerHTML = '';
        preguntaRealizada = false;
    });
} 



function preguntar(){

    fetch(uri,{ method: 'get' })
    .then(function(respuesta) { 
           return respuesta.json() 
       })
     .then (function(jsonData) { 
           mostrarResultados(jsonData);
       })
       .catch(function(ex) { 
           console.error('Error', ex.message) }) 
}

function mostrarResultados(jsonData) {

    let titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode(` Respuesta: ${jsonData.answer == 'yes'? 'Si': jsonData.answer == 'no'? 'No' : 'Puede' }`));
    titulo.setAttribute('class', `text-center text-white p-3 ${jsonData.answer == 'yes'? 'bg-success': jsonData.answer == 'no'? 'bg-danger' : 'bg-warning' }`);
    resultado.appendChild(titulo);

    let imagen = document.createElement('img');
    imagen.setAttribute('src', jsonData.image);
    imagen.setAttribute('class', 'w-100');
    resultado.appendChild(imagen);
}