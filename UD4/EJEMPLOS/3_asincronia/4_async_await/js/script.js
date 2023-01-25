


/* Definimos la función async que devuelve una promesa */
async function hazPizza(ingredientes){
  
  const promesaPizza= new Promise((resolve, reject) => {
    if(ingredientes.includes("piña"))
      reject("La pizza no lleva piña!");
      else{

    setTimeout(() => {
      resolve('Pizza lista con ' + ingredientes);
    }, 5000);
  }
  });
  return promesaPizza;
}



/* Como los await solo pueden estar dentro de una función async, creamos una función async */ 
async function pizzeria(){

/* Llamamos a la función que hace la pizza pasandole los ingredientes 
    El uso de await equivale a .then
    Los resultados estarán listos cuando se cumpla la promesa
  */
const resultado= await hazPizza(['tomate', 'queso', 'jamón'])
console.log(resultado);
 
const resultado2= await hazPizza(['tomate', 'queso', 'pepperoni'])
console.log(resultado2);
console.log("Acabo");
}

/* Llamamos a la función async en un contexto global */
pizzeria();

