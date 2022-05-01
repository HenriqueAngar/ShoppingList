//Aciona a inserção de elementos dinâmicos ao sistema
function inserirComportamentosTabelas(){

    insereSeletoresDone();
    seletoresMaisLinhasTabelas();
    engatilharLinhas();
    processarTitulos();
    processarDescricao();
    processarQuantidades();
    processarPrecos();
    //carregarValores();
 }

//Adciona os gatilhos que configuram a criação de novas tabelas
function gatilhoNovaTabela(){ 

    // inserção de uma nova tabela por botão
    let botao = document.getElementById("adcionar-tabela")
    botao.addEventListener("click", () => criarNovaTabela("",false));
    
    // inserção de uma nova tabela por tecla enter
    document.querySelector('#inserir-campo').addEventListener('keypress', function (e) {
       if (e.key === 'Enter') {criarNovaTabela(false);}}); 
 }

// Adciona os gatilhos para adicionar linhas a tabela desejada
function seletoresMaisLinhasTabelas (){

    var listaBotoes = document.getElementsByClassName("tabela__cabecalho-botao");
    for (var i = 0; i <= listaBotoes.length - 1; i++){ listaBotoes[i].addEventListener("click", adcionarLinhas);}
 }