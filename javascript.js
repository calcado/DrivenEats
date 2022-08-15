
function selecionarPrato(classBotao){
    const botaoSelecionado = document.querySelector('.pratos .selecionado');

    if( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    
}

function selecionarBebida(classBotao){
    const botaoSelecionado = document.querySelector('.bebidas .selecionado');

    if( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    
}

function selecionarSobremesa(classBotao){
    const botaoSelecionado = document.querySelector('.sobremesas .selecionado');

    if( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    
}


if (selecionarPrato !== null && selecionarBebida !== null && selecionarSobremesa !== null ){
    
}

function fecharAConta(classBotao){
    alert("clicou");
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('bordaconta');
    
    const paragrafo = document.querySelector('pedido');
    paragrago.innerHTML = "Fechar pedido";
}

