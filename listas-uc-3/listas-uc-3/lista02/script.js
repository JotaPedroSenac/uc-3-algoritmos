// 1-

let vendasMensais = 41000;
let pontualidade = 84;

if(vendasMensais > 100000 && pontualidade > 95){
    console.log("Desempenho Excelente");
}else if(vendasMensais >= 50000 && vendasMensais <= 100000 && pontualidade >= 85 && pontualidade <=95){
    console.log("Desempenho Bom")
}else if(vendasMensais < 50000 || pontualidade < 85){
    console.log("Desempenho Regular")
}

// 2-

function aprovarBolsa(mediaAcademica, renda){
    if(mediaAcademica > 8.5 && renda < 3000){
        return "Bolsa Integral";
    }else if(mediaAcademica >= 7 && mediaAcademica <= 8.4 && renda >= 3000 && renda <= 6000){
        return "Bolsa Parcial";
    }else if(mediaAcademica < 7 || renda > 6000){
        return "Não aprovar Bolsa";
    }
    
}

console.log(aprovarBolsa(5, 4000));

// 3- 

function verRisco(imc, idade){
    if(imc > 30 && idade > 60){
        return "Risco Alto";
    }else if(imc >= 25 && imc <= 30 && idade >= 45 && idade <= 60){
        return "Risco Médio";
    }else if(imc < 25 || idade < 45){
        return "Risco Baixo";
    }
}

console.log(verRisco(21, 41));

// 4- 

function ClassificarCliente(rendaAnual, historico){
    if(rendaAnual > 100000 && historico == "Excelente"){
        return "Crédito Prime"
    }else if(rendaAnual >= 50000 && rendaAnual <= 100000 && historico == "Bom"){
        return "Crédito Padrão";
    }else if(rendaAnual < 50000 || historico == "Ruim"){
        return "Restrito";
    }
}

console.log(ClassificarCliente(40000, "Ruim"));

// 5-

function classificarProdutos(preco, demanda){
    if(preco > 100 && demanda > 500){
        return "Produto Premium";
    }else if(preco >= 50 && preco <= 100 && demanda >= 200 && demanda <= 500){
        return "Produto Padrão"
    }else if(preco < 50 || demanda < 200){
        return "Produto Econômico";
    }
}

console.log(classificarProdutos(41, 201));

// 6-

function selecionarCandidatos(experiencia, formacao){
    if(experiencia > 10 && formacao == "Doutorado"){
        return "Posiçao Senior";
    }else if(experiencia >= 5 && experiencia <= 10 && formacao == "Mestrado"){
        return "Posição Plena";
    }else if(experiencia < 5 || formacao == "Graduação"){
        return "Posição Junior";
    }
}

console.log(selecionarCandidatos(4, "Graduação"));

// 7-

function avaliarFornecedores(qualidade, prazo){
    if(qualidade == "Excelente" && prazo < 5){
        return "Fornecedor A";
    }else if(qualidade == "Boa" && prazo >= 5 && prazo <= 10){
        return "Fornecedor B";
    }else if(qualidade == "Regular" || prazo > 10){
        return "Fornecedor C";
    }
}

console.log(avaliarFornecedores("Regular", 6));

// 8-

function classificarProjetos(orcamento, complexidade){
    if(orcamento > 1000000 && complexidade == "Alta"){
        return "Projeto Estratégico";
    }else if(orcamento >= 500000 && orcamento <= 1000000 && complexidade == "Media"){
        return "Projeto Importante";
    }else if(orcamento < 500000 || complexidade == "Baixa"){
        return "Projeto Secundário";
    }
}

console.log(classificarProjetos(300000, "Media"));

// 9- 

function avaliarCursos(avaliacao, conclusao){
    if(avaliacao > 4.5 && conclusao > 90){
        return "Curso Excelente";
    }else if(avaliacao >= 3.5 && avaliacao <= 4.5 && conclusao >= 75 && conclusao <= 90){
        return "Curso Bom";
    }else if(avaliacao < 3.5 || conclusao < 75){
        return "Curso Regular";
    }
}

console.log(avaliarCursos(2, 81));

// 10 - 

function classificarFilmes(avaliacaoUser, visualizacoes){
    if(avaliacaoUser > 4.5 && visualizacoes > 1000000){
        return "Filme Blockbuster";
    }else if(avaliacaoUser >= 3.5 && avaliacaoUser <= 4.5 && visualizacoes >= 500000 && visualizacoes <= 1000000){
        return "Filme Popular"
    }else if(avaliacaoUser < 3.5 || visualizacoes < 600000){
        return "Filme Nicho";
    }
}

console.log(classificarFilmes(2, 600000));