function calcularValores(){

    carregarValores();
    processarSubtotais();
    calcularTotal();
}

// arquivo responsável por calcular o produto de quantidade e preço e inseri-los na tabela
function carregarValores(){

    var listaDeQuantidades = document.getElementsByClassName('tabela__qtde');
    var listaDePrecos = document.getElementsByClassName('tabela__preco');
    var listaDeCelulas = document.getElementsByClassName('tabela__multiplicacao');

    for( var j = 0; j < listaDeCelulas.length; j++){

        var local = listaDeCelulas[j];

        var quantidadeBruta = listaDeQuantidades[j].innerHTML;
        var precoBruto = listaDePrecos[j].innerText;
        var quantidade = parseFloat(quantidadeBruta);
        var preco = moneyToFloat(precoBruto);

        var produto = quantidade*preco;
        var resultado = "R$ 0.00";
        if(isNaN(produto)){ produto = "R$ 0.00"
        }else{resultado = produto.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
        local.innerText = resultado;
    }
}

//arquivo referente ao cálculo individual de cada um dos subtotais presentes na tabela;
function processarSubtotais (){

    var listaSubtotais = document.getElementsByClassName('tabela__cabecalho-subtotal');
    listaSubtotais = Array.from(listaSubtotais);
    
    listaSubtotais.forEach( subTotal => {
        var tabela = subTotal.parentElement.parentElement.parentElement;
        var listaDeProdutos = tabela.getElementsByClassName('tabela__multiplicacao');
        var local = subTotal;
        var resultado = calcularSubtotal(listaDeProdutos);
        resultado = resultado.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
        local.innerText = resultado;
    })        
}

function calcularSubtotal (listaDeProdutos){

    var subTotal = 0;
    listaDeProdutos = Array.from(listaDeProdutos);

    listaDeProdutos.forEach( produto => {
        
        var valorCelula = moneyToFloat(produto.innerText);
        subTotal += valorCelula;
    }); return subTotal;
}

function calcularTotal (){

    var total = 0;
    var listaDeSubTotais = document.getElementsByClassName('tabela__cabecalho-subtotal');
    listaDeSubTotais = Array.from(listaDeSubTotais);
    
    listaDeSubTotais.forEach(valor => { let valorRefinado = moneyToFloat(valor.innerText); total += valorRefinado;})

    let resultado = total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    let local = document.querySelector('.rodape__valor-p');
    local.innerText = resultado;
}

function moneyToFloat(value){

    value = value.split('$'); value = value[1].replace(",",".")
    let monetary = parseFloat(value);
    return monetary;
}