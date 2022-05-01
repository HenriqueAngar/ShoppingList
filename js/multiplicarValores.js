// arquivo responsável por calcular o produto de quantidade e preço e inseri-los na tabela
function carregarValores(){

    var listaDeQuantidades = document.getElementsByClassName('tabela__qtde');
    var listaDePrecos = document.getElementsByClassName('tabela__preco');
    var listaDeCelulas = document.getElementsByClassName('tabela__multiplicacao');

    for( var j = 0; j < listaDeCelulas.length; j++){

        var local = listaDeCelulas[j];

        var quantidadeBruta = listaDeQuantidades[j].innerHTML;
        var precoBruto = listaDePrecos[j].innerHTML;

        var quantidade = refinarQuantidade(quantidadeBruta);
        var preco = refinarPreco(precoBruto);

        if(quantidade == false || preco == false || quantidade == "" || preco == ""){

            var resultado = "R$ 0.00"
            inserirResultados(resultado, local);

        }else {
            var produto = quantidade*preco;
            var resultado = produto.toFixed(2);
            inserirResultados(resultado, local);
        }
    }
}

function refinarQuantidade(quantidadeBruta){

    var valor = quantidadeBruta;

    if(valor == `0.00`){

        var resultado = false;
        return resultado;

    }else{

        var resultado = parseFloat(valor);
        return resultado;
    }
}

function refinarPreco(precoBruto){

    var valor = precoBruto;

    if(valor == `R$ 0.00`){

        var resultado = false;
        return resultado;

    }else{
        var resultado = parseFloat(valor.slice(3, valor.length));
        return resultado;
    }
}

function inserirResultados (resultado, local){

    if(resultado == "R$ 0.00"){

        local.innerHTML = resultado;

    }else{

        var valor = `${resultado}`;
        var arrayValor = valor.split('.');
        
        if(arrayValor.length == 1){

            var zeroEsquerda = 0;

        }else{

            var zeroEsquerda = arrayValor[1].length;
        }
    }
    
    switch(zeroEsquerda){

        case 0: local.innerHTML = `R$ ${resultado}.00`; break;

        case 1: local.innerHTML = `R$ ${resultado}.0`; break;

        case 2: local.innerHTML = `R$ ${resultado}`; break;
    }
}
