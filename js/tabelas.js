// Inicia o processo de criação de uma nova tabela
 function initNewTable() {

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

   corpoTabela.appendChild(cabecalhoTabela);
   corpoTabela.appendChild(linhaTopo);
   novaTabela.appendChild(corpoTabela);
   espaco.appendChild(novaTabela);

   cabecalhoTabela.firstChild.addEventListener('click', function (e){adcionarLinhas(corpoTabela.lastChild)});
   refreshPage(true, false);
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

// Inicia sequencia de adição de linhas na tabela
function adcionarLinhas (thisTable){

   var novaLinha = criarConteudo ();
   let local = thisTable
   local.appendChild(novaLinha);
   refreshPage(true, false);
}

function criaPrimeiraLinha (){

   var tbody = document.createElement("tbody");
   tbody.classList.add("tabela__corpo");
   var linha = criarConteudo();
   tbody.appendChild(linha);
   return tbody;
}      

// Gera as instruções de criação de linha
function criarConteudo(){

   var conteudo = document.createElement("tr");
   conteudo.classList.add("tabela__linha1");
   
   var done = document.createElement("td");
   done.classList.add("tabela__done");

   var campo = document.createElement("input");
   campo.classList.add("done");
   campo.setAttribute("type", "checkbox");
   done.appendChild(campo);

   var qtde = document.createElement("td");
   qtde.classList.add("tabela__qtde");
   qtde.innerHTML = "0.00"

   var descricao = document.createElement("td");
   descricao.classList.add("tabela__descricao");
   descricao.innerHTML = "Clique uma vez para editar, e duas para excluir"

   var preco = document.createElement("td");
   preco.classList.add("tabela__preco");
   preco.innerHTML = "R$ 0.00";

   var multiplicacao = document.createElement("td");
   multiplicacao.classList.add("tabela__multiplicacao");

   conteudo.appendChild(done);
   conteudo.appendChild(qtde);
   conteudo.appendChild(descricao);
   conteudo.appendChild(preco);
   conteudo.appendChild(multiplicacao);

   return conteudo;
}






