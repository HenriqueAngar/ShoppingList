//Gerencia a criação de novas tabelas
function criarNovaTabela(texto, nome){

   if(nome){
      criaTabela(texto);
      criaPrimeiraLinha();
      refreshPage(true);

   }else{ 
      comecarCriarTabela();
      corrigeCorLinhas();
      refreshPage(false);
   }
}

 // Inicia o processo de criação de uma nova tabela
 function comecarCriarTabela () {

   var tituloInicial = document.querySelector("#inserir-campo");
   var tituloFinal = tituloInicial.value;
   tituloInicial.value = "";

   var textIsTrue = new Boolean;
   if (tituloFinal == ""){ textIsTrue = false;}else {textIsTrue = true;}
   if (textIsTrue){criaTabela (tituloFinal);}else{return;}
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





