function calcularTotal (){

    var listaDeSubTotais = document.getElementsByClassName('tabela__cabecalho-subtotal');

    var total = 0;

    for(var m = 0; m < listaDeSubTotais.length; m++){

        var valorSubTotal = listaDeSubTotais[m].innerHTML;
        
        var valorRefinado = refinarValor(valorSubTotal);

        total += valorRefinado;
    }

    alterarTotal(total);
}

function refinarValor(valorSubTotal){

    valorFloat = parseFloat(valorSubTotal.slice(3, valorSubTotal.length - 1));

    return valorFloat;
}

function alterarTotal(total){

    local = document.querySelector('.rodape__valor-p');

    if(total == 0){

        var zeroEsquerda = 0;

    }else{
        var texto = `${total}`
        var arrayValor = texto.split('.');
    
        if(arrayValor == 1 || arrayValor[1]==undefined){
    
            var zeroEsquerda = 0;
    
        }else{
    
            var zeroEsquerda = arrayValor[1].length;
        }
    }
   

    switch(zeroEsquerda){

        case 0: local.innerHTML = `R$ ${total}.00`; break;

        case 1: local.innerHTML = `R$ ${total}0`; break;

        case 2: local.innerHTML = `R$ ${total}`; break;
    }
}