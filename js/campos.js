//Gerencia os campos dinamicos das tabelas
function camposDinamicos(){

    insertActionsToTables();
    processarTitulos();
    processarDescricao();
    processarPrecos();
    processarQuantidades();
}

//Insert Actions for the tables Elements
function insertActionsToTables(){
    
    insertAction("done");
    insertAction("plusLine");
}

//Insert the action to all tables Elements according type class name
function insertAction(type){

    let className = new String;

    switch(type){

        case 'plusLine': className = "tabela__cabecalho-botao"; break;
        //case "done": className = 'done'; break; 
    }
    
    let tableElements = document.getElementsByClassName(className);
    tableElements = Array.from(tableElements);
    toAddEvent(tableElements, type)
}

function toAddEvent(list, type){

    switch (type){

        case "plusLine": list.forEach(element => { element.addEventListener("click", function (e){ adcionarLinhas(element, true, false)})}); break;
        //case "done": console.log(type); break;  
    } 
}

//handle item of list when done or not
function manipularObjeto(){

    var botaoFeito = this;
    var estaLinha = botaoFeito.parentElement.parentElement;
    const classe = estaLinha.classList.value;
    
    if(classe.length == 14){ estaLinha.classList.add('feito');
    }else{estaLinha.classList.remove('feito');}
}
