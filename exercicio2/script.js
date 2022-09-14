// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.


const soma = (num1, num2)=> {
  return num1 + num2 
}

console.log(soma(2,2))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
const soma2 = (numb1, numb2)=> {
  if (numb1 >= numb2){
    console.log('O primeiro numero é maior ou igual ao segundo')
  } 
  return numb1 + numb2
}
console.log(soma2(2,2))

// c) Uma função que receba um número e imprima se ele é par ou não

let parOrNot = (numero) => {
  if (numero %2 === 0){
    console.log(`${numero} é par`)
  } else {
    console.log(`${numero} não é par`)
  }
} 
parOrNot(3)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas
  
const apenasPalavras = (string) => {
  console.log(`${string.length}  ${string.toUpperCase()}`)
}
apenasPalavras('palavrinha')

