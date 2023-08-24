import entradaDados from 'readline-sync';

console.log("\n Aplicação de Juros: \n");

let valor = entradaDados.question("Informe o valor devido: R$ ");
let dias = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ")

let resultado = ''

//valor += (dias * 10) / 365; // Calculo dos juros

console.log("\n Valor original da dívida: R$ "+valor+"\n")
console.log("\n Dias de atraso: "+dias+"\n")
console.log("\n Taxa de Juros até 15 dias é de: 5% \n")
console.log("\n Taxa de Juros acima de 15 dias é de: 10% \n")


if (dias > 15 && dias < 31){
    resultado = Number(valor) + (valor * 0.10)
}else {
    resultado = Number(valor) + (valor * 0.5)
}

console.log("\n Valor total com juros é de: "+resultado)

