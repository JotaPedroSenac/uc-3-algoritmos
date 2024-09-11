// Questão 01

let valorRoupa = 101;

if (valorRoupa > 100) {
    valorRoupa = valorRoupa - (valorRoupa * 0.2);
    console.log("Você recebeu um desconto de 20%. O novo valor será de:" + valorRoupa)
}else if (valorRoupa > 50){
    valorRoupa = valorRoupa - (valorRoupa * 0.1);
    console.log("Você recebeu um desconto de 10%. O novo valor será de:" + valorRoupa)
}else{
    console.log("Você não tem desconto!")
}

// Questão 2

let idade = 17;

if(idade < 12){
    console.log("Criança!")
}else if(idade >= 12 && idade <= 18){
    console.log("Adolescente!")
}else{
    console.log("Maior de Idade")
}

// Questão 3

let temp = 40;

if(temp < 15){
    console.log("Frio!")
}else if(temp >= 15 && temp <= 30){
    console.log("Agrdável")
}else{
    console.log("Quente!")
}

// Questão 4

let nota = 80;

if(nota > 90){
    console.log("A");
}else if(nota >=70 && nota <= 90){
    console.log("B")
}else{
    console.log("C")
}

// Questão 5

let velocidade = 85;

if(velocidade > 120){
    console.log("Muito rápido");
}else if(velocidade >= 80 && velocidade<= 120){
    console.log("Velocidade adequada");
}else{
    console.log("Muito lento")
}

// Questão 6

let qtdEstoque = 51;

if(qtdEstoque < 10){
    console.log("Estoque baixo");
}else if(qtdEstoque >= 10 && qtdEstoque <= 50){
    console.log("Estoque médio")
}else{
    console.log("Estoque alto")
}

// Questão 7

let peso = 4;

if(peso < 1){
    console.log("Leve")
}else if(peso >= 1 && peso <= 5){
    console.log("Médio")
}else{
    console.log("pesado")
}

// Questão 8

let altura = 200;

if(altura < 50){
    console.log("Baixa")
}else if(altura >= 50 && altura <= 150){
    console.log("Média")
}else{
    console.log("Alta")
}

// Questão 9

let idadeFilme = 9;

if(idadeFilme < 10){
    console.log("Infantil")
}else if(idade >= 10 && idade <= 18){
    console.log("Adolescente");
}else{
    console.log("Adulto")
}

// Questão 10

let rendimento = 60;

if(rendimento < 10){
    console.log("Baixo rendimento")
}else if(rendimento >= 10 && rendimento <= 15){
    console.log("Rendimento médio")
}else{
    console.log("Alto rendimento")
}