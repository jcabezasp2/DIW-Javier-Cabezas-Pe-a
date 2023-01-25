const uri = 'https://yesno.wtf/api';


window.addEventListener('load', init);
const pregunta = document.querySelector('#txtPregunta');
const responder = document.querySelector('#btnRespuesta');
const respuesta = document.querySelector('#btnPregunta');
const resultado = document.querySelector('#resultado');

function init() {

    responder.addEventListener('click', preguntar);
    respuesta.addEventListener('click', reiniciar);
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

function reiniciar(){

}

function mostrarResultados(jsonData) {
    console.log(jsonData);
    let titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode(` Respuesta: ${jsonData.answer == 'yes'? 'Si': jsonData.answer == 'no'? 'No' : 'Puede' }`));
    resultado.appendChild(titulo);
}