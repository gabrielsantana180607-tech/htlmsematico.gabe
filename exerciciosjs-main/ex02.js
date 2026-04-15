//Verificar se um número é maior que 10
let num = 9;
if (num > 10) {
    console.log(`O número ${num} é maior que 10`);
} else {
    console.log(`O número ${num} é menor que 10`);
}

//Verifique se um número é par ou ímpar
let num2 = 8;
if (num2 % 2 === 0) {
    console.log("par")
} else {
    console.log("ímpar")
}

//verificar se um número é positivo ou negativo
let num3 = 5;
if (num3 >= 0) {
    console.log('Positivo')
} else {
    console.log('Negativo')
}

let temp = 15;
if (temp <= 15) {
    console.log('Frio')
} else if (temp >=16 && temp <=25) {
    console.log('Agradável')
} else {
    console.log('Quente')
}

let idade = 12;
if (idade < 12) {
    console.log('Criança')
} else if (idade <=12 && idade <=17) {
    console.log('Adolescente')
} else {
    console.log('Adulto')
}