//Insert Actions for the tables Elements
function insertActionsToTables(){
    
    insertAction("tableTitle");
    insertAction("done");
    insertAction("qtde");
    insertAction("item");
    insertAction("price");
    
}

//Insert the action to all tables Elements according type class name
function insertAction(type){

    let className = new String;

    switch(type){
        
        case 'tableTitle': className = "tabela__cabecalho-descricao"; break;
        case "done": className = 'done'; break;
        case "qtde": className = "tabela__qtde"; break;
        case "item": className = "tabela__descricao"; break;
        case "price": className = "tabela__preco"; break;
    }
    
    let tableElements = document.getElementsByClassName(className);
    tableElements = Array.from(tableElements);
    toAddEvent(tableElements, type)
}

//For to control the number of open inputs
let inputClick = 0;


function toAddEvent(list, type){

    switch (type){

        case "tableTitle": list.forEach(element => { element.addEventListener("click", function (e){ inputClick++; insertTitle(element)})}); break;
        case "done": list.forEach(element => { element.addEventListener("click", function (e){ handleDone(element)})}); break;
        case "qtde": list.forEach(element => { element.addEventListener("click", function (e){ inputClick++; editarQuantidade(element)})}); break;
        case "item": list.forEach(element => { element.addEventListener("click", function (e){ inputClick++; handleDescription(element)})}); break;
        case "price": list.forEach(element => { element.addEventListener("click", function (e){ inputClick++; handlePrice(element)})}); break;
    } 
}

// replace text by input for title
function insertTitle(elemento){

    if(inputClick < 2){

        var titulo = elemento; titulo.innerHTML = "";
        var campo = document.createElement("input");
        
        campo.classList.add('input__titulo');
        campo.setAttribute('id', 'input-titulo');
        campo.setAttribute('placeholder', 'digite o título da tabela');
        titulo.appendChild(campo);

        campo.addEventListener('keypress', function (e){if(e.key === 'Enter'){
            var texto = campo.value;
            var celula = campo.parentElement; celula.innerHTML = `${texto}`;
            campo.remove(); refreshPage(false, false); inputClick = 0;
        }}); 
    }
}

//handle item of list when done or not
function handleDone(botaoFeito){

    var estaLinha = botaoFeito.parentElement.parentElement;
    const classe = estaLinha.classList.value;
    
    if(classe.length == 14){ estaLinha.classList.add('feito');
    }else{estaLinha.classList.remove('feito');}
}

//manipulate item quantity
function editarQuantidade(objeto){

    if(inputClick < 2){
        var campo = document.createElement('input');
        campo.classList.add('input__conteudo');
        campo.setAttribute('type', 'number');
        campo.setAttribute('placeholder', 'Quantidade?');

        objeto.innerHTML ="";
        objeto.appendChild(campo);
        objeto.addEventListener('keypress', function(e){
            if(e.key === 'Enter'){confirmValue(campo, true, false);}
        })
    }
}

//handle item description
function handleDescription(este){

    if(inputClick <2){

        var descricao = este; descricao.innerHTML = "";
        var campo = document.createElement('input');
        campo.classList.add('input__conteudo');
        campo.setAttribute('placeholder', 'Digite a descrição do item:');
        descricao.appendChild(campo);

        campo.addEventListener('keypress', function (e){
            if(e.key === 'Enter'){ confirmValue(campo, false, false);}
        })
    }   
}

//handle item price
function handlePrice (objeto){

    if(inputClick < 2){
        var campo = document.createElement('input');
        campo.setAttribute('type', 'number');
        campo.setAttribute('placeholder', 'Valor?');
        campo.classList.add('input__conteudo');

        objeto.innerHTML  = "";
        objeto.appendChild(campo);
        campo.addEventListener('keypress', function (e){if(e.key === "Enter"){ confirmValue(campo, true, true);}});
    }
    
}

//Confirm input value and remove it
function confirmValue(campo, itsNumber, itsPrice){

    var valor =  campo.value;
    if(itsNumber){valor = parseFloat(valor)}
    if(itsPrice){valor = valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
    var celula = campo.parentElement;
    celula.innerHTML = `${valor}`;
    campo.remove(); refreshPage(false, true); inputClick = 0;
}
