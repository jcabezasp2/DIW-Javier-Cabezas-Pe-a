
const CONTENEDOR = document.querySelector('#contenedor');

let miXHR=new XMLHttpRequest();


window.addEventListener('load', init);



function init() {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    miXHR.onreadystatechange=miXHRCambiaEstado;
    miXHR.open("GET",`https://dummyjson.com/products/${aleatorio}`);
    miXHR.send(null);

}


function miXHRCambiaEstado(){


      if((this.readyState===4)&&(this.status===200)){

        imprimir(this.responseText);
      }
  }

  function imprimir(respuesta){
    let producto=JSON.parse(respuesta);

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
      nombre.appendChild(document.createTextNode(producto.title));
      nombre.setAttribute("class", "list-group-item d-2 fs-4 text-center");
      ul.appendChild(nombre);

      //descripcion
      let descripcion = document.createElement("li");
      descripcion.appendChild(document.createTextNode(`Descripcion: ${producto.description}`));
      descripcion.setAttribute("class", "list-group-item d-2");
      ul.appendChild(descripcion);
      //stock
      let stock = document.createElement("li");
      stock.appendChild(document.createTextNode(`Stock: ${producto.stock}`));
      stock.setAttribute("class", "list-group-item d-2");
      ul.appendChild(stock);

       //precio
       let precio = document.createElement("li");
       precio.appendChild(document.createTextNode(`Precio: ${producto.price}`));
       precio.setAttribute("class", "list-group-item d-2");
       ul.appendChild(precio);

      //imagen
      let imagen = document.createElement("img");
      imagen.setAttribute("src", producto.images[0]);
      imagen.setAttribute("class", "card-img-top");
      card.appendChild(imagen);

      card.appendChild(ul);
      CONTENEDOR.appendChild(contenedor);
  }