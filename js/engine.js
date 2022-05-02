//Adciona ao iniciar os gatilhos que configuram a criação de novas tabelas
function gatilhoNovaTabela(){ 

    // inserção de uma nova tabela por botão
    let botao = document.getElementById("adcionar-tabela")
    botao.addEventListener("click", function (clique){ initNewTable();});
    
    // inserção de uma nova tabela por tecla enter
    document.querySelector('#inserir-campo').addEventListener('keypress', 
    function (e) {if (e.key === 'Enter') {initNewTable();}});
 }

//Atualiza as configurações da página
function refreshPage(action, value){
    
    gatilhoNovaTabela();
    if(action){insertActionsToTables();}
    if(value){calcularValores();}
    handleDeleteAction();
    handleLineColor();
 }

//Control the delete action in tables and lines
function handleDeleteAction(){

    let tables = getItems("tabela__cabecalho");
    let blankLines = getItems("tabela__linha1");
    let coloredLines = getItems("tabela__linha2");
 
    insertDeleteAction(tables, true);
    insertDeleteAction(blankLines, false);
    insertDeleteAction(coloredLines, false);
}

//Get a especified html collecion
function getItems(name){

    let collection = document.getElementsByClassName(name);
    collection = Array.from(collection); return collection;
}

function insertDeleteAction(list, isTable){ list.forEach(element => { 

    element.addEventListener("contextmenu", function (e){ deleteThis(element, isTable)})});}

function deleteThis(thisOne, isTable){

    if(isTable){ thisOne.parentElement.remove(); 
    }else{ thisOne.remove();}
    refreshPage(false, true)
}

//Adiciona o padrão de zebrado as tabelas
function handleLineColor (){

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
        }}
    }
}


