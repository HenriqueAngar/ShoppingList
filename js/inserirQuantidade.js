function processarQuantidades(){

    var listaQuantidades = document.getElementsByClassName('tabela__qtde');

    for(var g = 0; g<listaQuantidades.length; g++){

        listaQuantidades[g].addEventListener('click', editarQuantidade, {once: true});
    }
}

function editarQuantidade(){

    var objeto = this;
    objeto.innerHTML ="";

    var campo = document.createElement('input');
    campo.classList.add('input__conteudo');
    campo.setAttribute('type', 'number');
    campo.setAttribute('placeholder', 'Quantidade?');

    objeto.appendChild(campo);

    gatilhoQuantidade(objeto, campo);
}

function gatilhoQuantidade(objeto, campo){

    objeto.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            confirmarQuantidade(campo);
        }
    })
}

function confirmarQuantidade(campo){

    var valor =  campo.value;
    valor.replace(',', '.');
    
    var celula = campo.parentElement;

    celula.innerHTML = `${valor}`;

    campo.remove();

    carregarValores();
    processarQuantidades();
    processarSubtotais();
    calcularTotal();
}