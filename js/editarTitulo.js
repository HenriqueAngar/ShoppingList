function processarTitulos(){

    var listaDeTitulos = document.getElementsByClassName('tabela__cabecalho-descricao');

    for(var e = 0; e < listaDeTitulos.length; e++){

        listaDeTitulos[e].addEventListener("click", inserirInput, {once: true});
    }
}

function inserirInput(){

    var titulo = this;
    titulo.innerHTML = "";


    var campo = document.createElement("input");
    campo.classList.add('input__titulo');
    campo.setAttribute('id', 'input-titulo');
    campo.setAttribute('placeholder', 'digite o título da tabela');

    titulo.appendChild(campo);

    prepararInsercao(campo);
}

function prepararInsercao(campo){
    
    campo.addEventListener('keypress', function (e){
        if(e.key === 'Enter'){
            editarTexto(campo)}
        }); 
}

function editarTexto (campo){

    var texto = campo.value;
    var celula = campo.parentElement;

    celula.innerHTML = `${texto}`;

    campo.remove();

    processarTitulos();
}