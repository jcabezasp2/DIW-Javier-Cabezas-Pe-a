




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


async function pidePizza(){
  /* Capturamos el error dentro del await con excepciones */
  try{
    const resultado=await hazPizza(['tomate', 'queso', 'piña'])
    console.log(resultado);
  }
  catch(err){
    console.error(err);
  }
}

pidePizza();

