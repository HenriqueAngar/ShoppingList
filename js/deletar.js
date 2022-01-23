// Prepara a funcionalidade de deletar as tabelas selecionadas
engatilharTabelas();

function engatilharTabelas(){

    var listaTabelas = document.getElementsByClassName('tabela__cabecalho-descricao');

    for(var c = 0; c < listaTabelas.length; c++){

        listaTabelas[c].addEventListener("contextmenu", deletarTabela);
    }
}

function deletarTabela(){
    var tabela = this.parentElement.parentElement.parentElement;

    tabela.remove();

    aplicarComportamentos();

}

// Prepara a funcionalidade de deletar as linhas selecionadas
engatilharLinhas();

function engatilharLinhas(){

    var listaDeLinhas = document.getElementsByTagName('tr');

    for(var d = 2; d < listaDeLinhas.length; d++){

        var classeLinha = listaDeLinhas[d].classList.value;

        if(classeLinha == "tabela__linha1" || "tabela__linha2"){

            listaDeLinhas[d].addEventListener("contextmenu", deletarLinha);

        }else{ continue;}
        
    }
}

function deletarLinha(){

    var linhaEscolhida = this;

    linhaEscolhida.remove();

    corrigeCorLinhas();
    processarSubtotais();
    calcularTotal();
}

//reinsere novamente os compormantos apos a alterações
function aplicarComportamentos(){

    processarTitulos();
    processarSubtotais();
    calcularTotal();
}