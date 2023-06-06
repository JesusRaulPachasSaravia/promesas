// Encadenar promesas
function primeraPromesa(){
  return new Promise((resolve,reject) =>{
    setTimeout(resolve,1000,"Promesa 1");
  });
}

function SegundaPromesa(valorEntrada){
  console.log(valorEntrada);
  return new Promise((resolve,reject) =>{
    setTimeout(resolve,500,"Promesa 2");
  });
}

// ¿Cómo la promesa 1 pasa un valor a la promesa 2?
// 1. la promesa 2 debe recibir parametros de entrada
primeraPromesa()
  .then(SegundaPromesa)
    .then((respuesta) =>{
      console.log(respuesta);
    });

/*
primeraPromesa()
  .then(SegundaPromesa)
    .then((respuesta) =>{
      console.log(respuesta);
    });    
*/      