processarDescricao();

function processarDescricao(){

    var listaDeDescricoes = document.getElementsByClassName('tabela__descricao');

    for(var f = 0; f < listaDeDescricoes.length; f++){

        listaDeDescricoes[f].addEventListener('click', prepararEdicaoDescricao, {once: true});
    }
}

function prepararEdicaoDescricao(){

    var descricao = this;
    descricao.innerHTML = "";

    var campo = document.createElement('input');
    campo.classList.add('input__conteudo');
    campo.setAttribute('placeholder', 'Digite a descrição do item:');

    descricao.appendChild(campo);

    adcionarGatilhoDescricao(campo);
}

function adcionarGatilhoDescricao(campo){

    campo.addEventListener('keypress', function (e){
        if(e.key === 'Enter'){
            editardescricao(campo);
        }
    })
}

function editardescricao(campo){

    var texto = campo.value;
    var celula = campo.parentElement;

    celula.innerHTML = `${texto}`;
    campo.remove();

    processarDescricao();
}