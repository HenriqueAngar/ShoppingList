// inserção de uma nova tabela por tecla enter
document.querySelector('#inserir-campo').addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
      comecarCriarTabela();
   }
});

 // inserção de uma nova tabela por botão
 var InserirTabela = document.querySelector("#adcionar-tabela");

 InserirTabela.addEventListener("click", comecarCriarTabela);

 // Inicia o processo de criação de uma nova tabela
 function comecarCriarTabela () {

   var tituloCodigo = document.querySelector("#inserir-campo");
   var titulo = tituloCodigo.value;
   tituloCodigo.value = "";

   var textIsTrue = verificaTexto(titulo);

   if (textIsTrue){

      criaTabela (titulo);

   }else{return;}
}

 function verificaTexto(titulo){

      if (titulo == ""){
         return false;
      
      }else {
         return true;
      }
 }

 function criaTabela (titulo){

    var espaco = document.querySelector(".tabelas");

    var novaTabela = document.createElement("div");
    novaTabela.classList.add("tabela");

    var corpoTabela = document.createElement("table");
    corpoTabela.classList.add("tabela__estrutura");

    var cabecalhoTabela = criaCabecalho(titulo);

    var linhaTopo = criaPrimeiraLinha();

    espaco.appendChild(novaTabela);
    novaTabela.appendChild(corpoTabela);
    corpoTabela.appendChild(cabecalhoTabela);
    corpoTabela.appendChild(linhaTopo);

    inserirComportamentosTabela();
 }

function criaCabecalho (titulo){

   var cabecalho = document.createElement("thead");
   cabecalho.classList.add("tabela__cabecalho"); 

   var botao = document.createElement("th");
   botao.classList.add("tabela__cabecalho-botao");
   botao.innerHTML = "&#10010;";

   var descricao = document.createElement("th");
   descricao.classList.add("tabela__cabecalho-descricao");
   descricao.setAttribute("colspan", "2");
   descricao.innerHTML = titulo;

   var subtotal = document.createElement("th");
   subtotal.classList.add("tabela__cabecalho-texto");
   subtotal.innerHTML = "Subtotal";

   var valor = document.createElement("th");
   valor.classList.add("tabela__cabecalho-subtotal");

   cabecalho.appendChild(botao);
   cabecalho.appendChild(descricao);
   cabecalho.appendChild(subtotal);
   cabecalho.appendChild(valor);

   return cabecalho;
}

function inserirComportamentosTabela(){

   insereSeletoresDone();
   seletoresMaisLinhasTabelas();
   engatilharTabelas();
   engatilharLinhas();
   processarTitulos();
   processarDescricao();
   processarQuantidades();
   processarPrecos();
   carregarValores();
}
