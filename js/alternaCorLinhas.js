corrigeCorLinhas ();

function corrigeCorLinhas (){

    var listaDeLinhas = document.getElementsByTagName("tr");

    // começa em 2 para evitar de selecionar os dois cabeçalhos anteriores
    for(var a = 2; a < listaDeLinhas.length; a++){

        var ehPar = a % 2;

        var linha = listaDeLinhas[a];

        var classe = linha.classList.value;

        if (classe = "tabela__linha1" || "tabela__linha2"){
            switch(ehPar){

                case 0: linha.classList.replace("tabela__linha1", "tabela__linha2"); break;
        
                case 1: linha.classList.replace("tabela__linha2", "tabela__linha1"); break;
            }

        }
    }
}
