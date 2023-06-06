async function sumar(valor1,valor2){
  return valor1+valor2
}

console.log(sumar(5,10))

function calcular(){
  return new Promise((resolve,reject) =>{
    setTimeout(resolve, 1000, 20)
  })
}