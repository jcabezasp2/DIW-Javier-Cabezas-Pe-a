
const CONTENEDOR = document.querySelector('#contenedor');

let miXHR=new XMLHttpRequest();




window.addEventListener('load', init);



function init() {
    miXHR.onreadystatechange=miXHRCambiaEstado;
    miXHR.open("GET","https://dummyjson.com/products");
    miXHR.send(null);

}


function miXHRCambiaEstado(){

    // Imprimimos un mensaje cada vez que cambia el estado
      console.log("Cambio de estado: "+this.readyState); // TODO Borrar
      if((this.readyState===4)&&(this.status===200)){
        // Si el estado es 4 y el código de estado es 200, es que la respuesta ha sido recibida correctamente.
        //console.log("Respuesta recibida "+this.responseText);
  
        imprimir(this.responseText);
       // let productos=JSON.parse(this.responseText);
  
        // Recorremos el array de fotos y las mostramos en la página
/*         fotos.forEach(element => {
          let =document.createElement("img");
          img.setAttribute("src",element.thumbnailUrl);
          img.setAttribute("alt",element.title);
          document.body.appendChild(img);
  
        }); */
  
      }
  }

  function imprimir(respuesta){
    let productos=JSON.parse(respuesta);
    console.log(productos.products)
    productos.products.forEach(element => {
      let card=document.createElement("div");
      card.setAttribute("class","col p-2");

     //lista
     let ul = document.createElement("ul");

      //nombre
      let nombre = document.createElement("li");
      nombre.appendChild(document.createTextNode(element.title));
      nombre.setAttribute("class", "list-group-item fs-5");
      ul.appendChild(nombre);

       //precio
       let precio = document.createElement("li");
       precio.appendChild(document.createTextNode(element.price));
       precio.setAttribute("class", "list-group-item fs-5");
       ul.appendChild(precio);

        console.table(element);



      card.appendChild(ul);
      CONTENEDOR.appendChild(card);
    });
  }