// Q1

let frutas = ["maçã", "banana", "laranja"];
frutas.push('Uva');
console.log(frutas);
frutas.shift();
console.log(frutas);

function verificarFruta(fruta){
    if (frutas.includes(fruta)) {
        console.log("Fruta encontrada")
    }else{
        console.log("Fruta Não encontrada")
    }
}

verificarFruta('banana');

// Q2

function calcular(a,b,operacao){
    if(operacao == "soma"){
        return a+b;
    }else if(operacao == "subtracao"){
        return a-b;
    }else if(operacao == 'divisao'){
        return a/b;
    }else if(operacao == "multiplicacao"){
        return a*b;
    }else{
        return "OPeração inválida";
    }   
}

console.log(calcular(10,2, "soma"));
console.log(calcular(10,2, "divisao"));

// Q3

let numeros = [1, 2, 3, 4, 5];

let numerosAumentados = [];

for (let i = 0; i < 5; i++) {
    let soma = numeros[i] + 5;
    numerosAumentados.push(soma);
}

console.log(numerosAumentados);

// Q4

function classificarNota(nota){
    switch (true) {
        case (nota >= 7):
            return "Aprovado"
        case (nota < 7):
            return "Reprovado"
        default:
            return "Nota inválida"
    }
}

console.log(classificarNota(8));
console.log(classificarNota(5));

// Q5

let num = [5, 10, 15, 20];

function verificarNumeros() {
       for (let i = 0; i < num.length; i++) {
        if (num[i] < 10) {
            console.log("Menor que 10");
        }else if(num[i] >=10 && num[i] <= 20){
            console.log("Entre 10 e 20");
        }else{
            console.log("Maior que 20");
        }
        
       }
}

verificarNumeros();

// Q6

let idade = 25;

if (idade >= 18 && idade < 65) {
    console.log("Adulto");
}else{
    console.log("Não Adulto");
}

let idade2 = idade >= 18 && idade < 65 ? "Adulto" : "Não Adulto";

console.log(idade2);

// Q7

let arr = [];

  function fizzbuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        }else if(i % 3 == 0){
            arr.push("Fizz");
        }else if(i % 5 == 0){
            arr.push("Buzz");
        }else{
            arr.push(i);
        }
        
    }
  }

  fizzbuzz(16);
  console.log(arr);

//   Q8

let tarefas = ["estudar", "limpar", "comprar"];

tarefas.splice(1, 0, "exercitar");
tarefas.splice(3)

console.log(tarefas);

//  Q9

function calcMedia(n1, n2) {
    return (n1 + n2)/2;
}

console.log(calcMedia(7, 9));

// Q10

let valores = [5, 10, 15, 20]; 
let valoresDivididos = []; 
let i = 0; 

while (i < valores.length) {
    let divisao = valores[i] / 2;
    valoresDivididos.push(divisao);
    i++;
}

console.log(valoresDivididos);

// Q11

// let num1 = parseInt(prompt("Escolha o primeiro número"));
// let num2 = parseInt(prompt("Escolha o segundo número"));

// function compararSoma() {5
//     let soma = num1 + num2;
//     if (soma > 20) {
//         alert("A soma é maior que 20");80
//     }else{
//         alert("A soma é menor que 20");
//     }80
// }

// console.log(compararSoma());

// Q12

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let msg;
// let j = 0;

// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     if(numbersCompleto % 3 == 0){
//         msg = 'é multiplo'
//     }else{
//         msg = 'Não é multiplo'
//     }

//     alert(${numbersCompleto}, ${msg})
// }

// Q13

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let quadrado;

// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     quadrado = numbersCompleto * numbersCompleto;

//     alert(${numbersCompleto} o quadrado é: ${quadrado})
// }

// Q14

// function verifiValor() {
//     let valor = parseInt(prompt("Digite um número"));
//     if (valor > 0) {
//         alert(${valor} é positivo);
//     }else if(valor < 0){
//         alert(${valor} é negativo);
//     }else{
//         alert("zero");
//     }
// }

// verifiValor();

// Q15

// let numArr = parseInt(prompt("Digite o tamanho do array"));
// let numbers = [];
// let numbersCompleto;
// let msg;


// for (let i = 1; i <= numArr; i++) {
//     numbersCompleto = numbers.push(i);
//     if(numbersCompleto % 2 == 0){
//         msg = 'é par'
//     }else{
//         msg = 'é impar'
//     }

//     alert(${numbersCompleto}, ${msg})
// }

// Q16

function operacaoMatematica() {
    let num1 = parseInt(prompt("Digite o primeiro numero"));
    let num2 = parseInt(prompt("Digite o segundo numero"));
    let operacao = prompt("Digite a operacao");
    let calc;

    if(operacao == "soma"){
         calc = num1 + num2;
    }else if(operacao == "subtracao"){
        calc = num1 - num2;
    }else if(operacao == "multiplicacao"){
        calc = num1 * num2;
    }else if(operacao == "divisao"){
        calc = num1 / num2;
    }
    alert(calc)
}

// operacaoMatematica();

// Q17

function verificarParidade(){
    let msg;
    let num = parseInt(prompt("Digite um numero"));
    if (num % 2 == 0) {
        msg = "É par";
    }else{
        msg = "É impar";
    }

    alert(`${num} ${msg}`)
}

// verificarParidade();

// Q18

let numArr = parseInt(prompt("Digite o tamanho do array"));
let numbers = [];
let numbersCompleto;
let msg;


for (let i = 1; i <= numArr; i++) {
    numbersCompleto = numbers.push(i);
    if(numbersCompleto > 10){
        msg = 'é maior que 10'
    }else if(numbersCompleto < 10){
        msg = 'é menor que 10'
    }else{
        msg = 'é 10'
    }
     alert(`${numbersCompleto}, ${msg}`)
}