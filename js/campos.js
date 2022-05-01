//Gerencia os campos dinamicos das tabelas
function camposDinamicos(){

    insereSeletoresDone();
    seletoresMaisLinhasTabelas();
    processarTitulos();
    processarDescricao();
    processarPrecos();
    processarQuantidades();
}

// Adciona os gatilhos para adicionar linhas a tabela desejada
function seletoresMaisLinhasTabelas (){

    var listaBotoes = document.getElementsByClassName("tabela__cabecalho-botao");
    for (var i = 0; i <= listaBotoes.length - 1; i++){ listaBotoes[i].addEventListener("click", adcionarLinhas);}
 }

 function insereSeletoresDone (){

    var listaCheckbox = document.getElementsByClassName('done');
    for( var b = 0; b < listaCheckbox.length; b++){ listaCheckbox[b].addEventListener("click", manipularObjeto);}
}

function manipularObjeto(){

    var botaoFeito = this;
    var estaLinha = botaoFeito.parentElement.parentElement;
    const classe = estaLinha.classList.value;
    
    if(classe.length == 14){ estaLinha.classList.add('feito');
    }else{estaLinha.classList.remove('feito');}
}
