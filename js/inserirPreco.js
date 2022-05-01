function processarPrecos (){

    var listaPrecos = document.getElementsByClassName('tabela__preco');

    for(var h = 0; h < listaPrecos.length; h++){

        listaPrecos[h].addEventListener('click', editarPreco, {once: true});
    }
}

function editarPreco (){

    var objeto = this;
    objeto.innerHTML  = "";

    var campo = document.createElement('input');
    campo.setAttribute('type', 'number');
    campo.setAttribute('placeholder', 'Valor?');
    campo.classList.add('input__conteudo');

    objeto.appendChild(campo);

    aguardarConfirmacaoPreco(campo);
}

function aguardarConfirmacaoPreco(campo){

    campo.addEventListener('keypress', function (e){

        if(e.key === "Enter"){

            processarValorPreco(campo);
        }
    });
}

function processarValorPreco(campo){

    var valor = campo.value;
    var preco = valor;
    var last = parseInt(valor.charAt(valor.length - 1));

    if(!isNaN(last) && valor != 0){

        valor.replace(',', '.');
        var arrayValor = valor.split(".", 2);

        if(arrayValor[0] == ""){

            arrayValor[0] = "0";
        }

        if(arrayValor[1] != undefined){
            var tamanhoStringCentavos = arrayValor[1].length;

        }else{tamanhoStringCentavos = 0}

        switch(tamanhoStringCentavos){

            case 0:    
            preco = `${arrayValor[0]}.00`;
            inserirPreco (campo, preco);
            break;

            case 1:
            preco = `${arrayValor[0]}.${arrayValor[1]}0`;
            inserirPreco (campo, preco);
            break;

            case 2:
            preco = `${arrayValor[0]}.${arrayValor[1]}`;
            inserirPreco (campo, preco);
            break;
    
            default:
            var centavos = arrayValor[1].slice(0,2);
            preco = `${arrayValor[0]}.${centavos}`;
            inserirPreco (campo, preco);
            break;
        }
    }else{

        preco = '0.00';

        inserirPreco(campo, preco);
    }
}

function inserirPreco (campo, preco){

    var celula = campo.parentElement;
    

    celula.innerHTML = `R$ ${preco}`;

    campo.remove();
    processarPrecos();
    carregarValores();
    processarSubtotais();
    calcularTotal();
}