
function main(){
    //Verifica se há dados salvos
    let ListaSalva = verificaConteudoSalvo();

    //cria tabelas a partir de dados salvos
    if(ListaSalva){

        alert("Puxando da memória")

    //Cria uma nova lista de compras
    }else{ 
        criarNovaTabela("Clique uma vez para editar e duas para excluir", true);
        gatilhoNovaTabela();
    }
}

function verificaConteudoSalvo(){

    return false;
}