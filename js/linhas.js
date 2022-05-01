
// Inicia sequencia de adição de linhas na tabela
function adcionarLinhas (){

    var estaTabela = this.parentElement.parentElement.parentElement;
    var local = estaTabela.querySelector("tbody");
    var novaLinha = criarConteudo ();

    local.appendChild(novaLinha);
    refreshPage(false);
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
