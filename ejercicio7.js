// Funciones asincronas
async function sumar(valor1,valor2){
  return valor1+valor2
}


async function calcular(num0){
  // setTimeout(callback,tiempo,resultado)
  return new Promise((resolve,reject) =>{
    setTimeout(resolve, 1000, 20)
  })
}

// El resultado sera una promesa con el valor 15

// El estado pendiente no se muestra ya que se ejecuta inmediatamente

console.log(sumar(5,10))

console.log(calcular())

calcular()
.then((res) =>{
  console.log(res)
}
)