insereSeletoresDone();

function insereSeletoresDone (){

    var listaCheckbox = document.getElementsByClassName('done');
    
    for( var b = 0; b < listaCheckbox.length; b++){

        listaCheckbox[b].addEventListener("click", manipularObjeto);
    }
}

function manipularObjeto(){

    var botaoFeito = this;

    var estaLinha = botaoFeito.parentElement.parentElement;

    const classe = estaLinha.classList.value;
    
    if(classe.length == 14){

        estaLinha.classList.add('feito');

    }else{

        estaLinha.classList.remove('feito');
    }
}

