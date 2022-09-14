// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function sayMyName(nome){
//   console.log(`Olá,  ${nome}`)
// }
// sayMyName('Paulo')

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada(numero){
//   let array = numero.slice()
//   for (i of array){
//     console.log(i*6)
//   } 
// }


// let multiplicados = [1,2,3,4,5,6,7,8,9,10]
// tabuada(multiplicados)




// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
const sayMyName= (nome) =>{
  console.log(`Olá,  ${nome}`)
}
sayMyName('Paulo')


const tabuada= (numero) => {
  let array = numero.slice()
  for (i of array){
    console.log(i*6)
  } 
}


let multiplicados = [1,2,3,4,5,6,7,8,9,10]
tabuada(multiplicados)
