// let promesa = new Promise((resolve,reject) =>{
//   setTimeout(resolve, 1000, 2)
// })

async function testPromesas(){
  let promesa1 = await new Promise((resolve,reject) =>{
    setTimeout(resolve,1000,20)
  })

  let promesa2 = await new Promise((resolve,reject) =>{
    setTimeout(resolve,1000,100)
  }) 

  console.log(promesa1+promesa2)
}

testPromesas()