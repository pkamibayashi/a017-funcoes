// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
let op1 = Number(prompt('Por gentileza, digite o primeiro numero que deseja somar '))
let op1Segundo = Number(prompt('Por gentileza, digite o segundo numero que deseja somar'))
let op2 = Number(prompt('Por gentileza, digite o primeiro numero que deseja subtrair'))
let op2Segundo = Number(prompt('Por gentileza, digite o segundo numero que deseja subtrair'))
let op3 = Number(prompt('Por gentileza, digite o primeiro numero que deseja multiplicar'))
let op3Segundo = Number(prompt('Por gentileza, digite o segundo numero que deseja multiplicar'))
let op4 = Number(prompt('Por gentileza, digite o primeiro numero que deseja dividir'))
let op4Segundo = Number(prompt('Por gentileza, digite o segundo numero que deseja dividir'))



const opera1 = (num1, num2) => {
console.log(`A soma de ${num1} e ${num2} é igual a ${num1+num2}`)
}

const opera2 = (num1, num2) => {
  console.log(`A subtração de ${num1} e ${num2} é igual a ${num1-num2}`)
}
const opera3 = (num1, num2) => {
  console.log(`A multiplicação de ${num1} e ${num2} é igual a ${num1*num2}`)
}
const opera4 = (num1, num2) => {
  console.log(`A divisão de ${num1} e ${num2} é igual a ${num1/num2}`)
}

opera1(op1, op1Segundo)
opera2(op2, op2Segundo)
opera3(op3, op3Segundo)
opera4(op4, op4Segundo)

