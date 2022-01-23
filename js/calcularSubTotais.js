//arquivo referente ao cálculo individual de cada um dos subtotais presentes na tabela;

processarSubtotais();

function processarSubtotais (){

    var listaSubtotais = document.getElementsByClassName('tabela__cabecalho-subtotal');

    for(var k = 0; k < listaSubtotais.length; k++){

        var tabela = listaSubtotais[k].parentElement.parentElement.parentElement;
        
        var listaDeProdutos = tabela.getElementsByClassName('tabela__multiplicacao');

        var local = listaSubtotais[k];

        var subTotal = calcularSubtotal(listaDeProdutos);
        
        inserirSubtotais(local, subTotal);
    }
}

function calcularSubtotal (listaDeProdutos){

    var subTotal = 0;

    for(var l = 0; l < listaDeProdutos.length; l++){

        var conteudoCelula = listaDeProdutos[l].innerHTML;
        var valorCelula = parseFloat(conteudoCelula.slice(3, conteudoCelula.length));

        subTotal += valorCelula;
    }

    return subTotal;
}

function inserirSubtotais (local, subTotal){

    if(subTotal == 0){

        var zeroEsquerda = 0;

    }else{
        var texto = `${subTotal}`
        var arrayValor = texto.split('.');
    
        if(arrayValor == 1 || arrayValor[1]==undefined){
    
            var zeroEsquerda = 0;
    
        }else{
    
            var zeroEsquerda = arrayValor[1].length;
        }
    }
   

    switch(zeroEsquerda){

        case 0: local.innerHTML = `R$ ${subTotal}.00`; break;

        case 1: local.innerHTML = `R$ ${subTotal}0`; break;

        case 2: local.innerHTML = `R$ ${subTotal}`; break;
    }
}


    