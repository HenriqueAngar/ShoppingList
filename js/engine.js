//Adciona ao iniciar os gatilhos que configuram a criação de novas tabelas
function gatilhoNovaTabela(){ 

    // inserção de uma nova tabela por botão
    let botao = document.getElementById("adcionar-tabela")
    botao.addEventListener("click", () => initNewTable());
    
    // inserção de uma nova tabela por tecla enter
    document.querySelector('#inserir-campo').addEventListener('keypress', function (e) {
       if (e.key === 'Enter') {initNewTable();}}); 
 }

//Atualiza as configurações da página
function refreshPage(action, value){

    if(action){insertActionsToTables();}
    //if(value){calcularValores();}
    handleLineColor();
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


