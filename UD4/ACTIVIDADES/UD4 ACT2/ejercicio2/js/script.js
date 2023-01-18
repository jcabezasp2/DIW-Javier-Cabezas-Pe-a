
const CONTENEDOR = document.querySelector('#contenedor');

let miXHR=new XMLHttpRequest();




window.addEventListener('load', init);



function init() {
    miXHR.onreadystatechange=miXHRCambiaEstado;
    miXHR.open("GET","https://dummyjson.com/products");
    miXHR.send(null);

}


function miXHRCambiaEstado(){


      if((this.readyState===4)&&(this.status===200)){

        imprimir(this.responseText);
      }
  }

  function imprimir(respuesta){
    let productos=JSON.parse(respuesta);

    let element = productos.products[Math.floor(Math.random() * productos.products.length)]

      let contenedor = document.createElement("div");
      contenedor.setAttribute("class", "col-12 col-md-6 col-lg-4");
      let card=document.createElement("div");
      card.setAttribute("class","card");
      contenedor.appendChild(card);
     //lista
     let ul = document.createElement("ul");
     ul.setAttribute("class", "list-group list-group-flush");
      //nombre
      let nombre = document.createElement("li");
      nombre.appendChild(document.createTextNode(element.title));
      nombre.setAttribute("class", "list-group-item d-2 fs-4 text-center");
      ul.appendChild(nombre);

      //descripcion
      let descripcion = document.createElement("li");
      descripcion.appendChild(document.createTextNode(`Descripcion: ${element.description}`));
      descripcion.setAttribute("class", "list-group-item d-2");
      ul.appendChild(descripcion);
      //stock
      let stock = document.createElement("li");
      stock.appendChild(document.createTextNode(`Stock: ${element.stock}`));
      stock.setAttribute("class", "list-group-item d-2");
      ul.appendChild(stock);

       //precio
       let precio = document.createElement("li");
       precio.appendChild(document.createTextNode(`Precio: ${element.price}`));
       precio.setAttribute("class", "list-group-item d-2");
       ul.appendChild(precio);

      //imagen
      let imagen = document.createElement("img");
      imagen.setAttribute("src", element.images[0]);
      imagen.setAttribute("class", "card-img-top");
      card.appendChild(imagen);

      card.appendChild(ul);
      CONTENEDOR.appendChild(contenedor);
  }