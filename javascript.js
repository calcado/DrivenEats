let contador = 0;
function selecionarPrato(classBotao){
    const botaoSelecionado = document.querySelector('.pratos .selecionado');

    if( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    contador--
    }
    contador++

    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    if (contador === 3){
      document.querySelector(".conta").classList.add("bordaconta")
      document.querySelector(".pedido").innerHTML = "Fechar pedido"
    }
    

}

function selecionarBebida(classBotao){
    const botaoSelecionado = document.querySelector('.bebidas .selecionado');

    if( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    contador--
    }

    contador++
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    if (contador === 3){
        document.querySelector(".conta").classList.add("bordaconta")
        document.querySelector(".pedido").innerHTML = "Fechar pedido"
      }
    
}

function selecionarSobremesa(classBotao){
    const botaoSelecionado = document.querySelector('.sobremesas .selecionado');

    if( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    contador--
    }
    contador++
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    if (contador === 3){
        document.querySelector(".conta").classList.add("bordaconta")
        document.querySelector(".pedido").innerHTML = "Fechar pedido"
      }
    
}


function fecharAConta(classBotao){
    

    const pratoSelecionado = document.querySelector(".prato .selecionado") 
    const bebidaSelecionado = document.querySelector(".bebida .selecionado")
    const sobremesaSelecionado = document.querySelector(".sobremesa .selecionado") 
    const preçoPrato = pratoSelecionado.querySelector(".preçoprato").innerHTML.split(" ")[1]
    const preçoBebida = bebidaSelecionado.querySelector(".preçobebida").innerHTML.split(" ")[1]
    const preçoSobremesa = sobremesaSelecionado.querySelector(".preçosobremesa").innerHTML.split(" ")[1]
    


    let valorTotal = Number(preçoPrato.replace(",",".")) + Number(preçoBebida.replace(",",".")) + Number(preçoSobremesa.replace(",","."))
    
    
    
    const mensagem = encodeURIComponent("Olá, gostaria de fazer o pedido:\n" + 
    "- Prato:  " + pratoSelecionado.querySelector(".nomeprato").innerHTML +
    "\n- Bebida:  " + bebidaSelecionado.querySelector(".nomebebida").innerHTML  +
    "\n- Sobremesa:  " + sobremesaSelecionado.querySelector(".nomesobremesa").innerHTML  +
    "\nTotal:  R$ " +  valorTotal.toFixed(2).toString().replace(".",","))


    let link= "https://wa.me/+5521999999999?text="+mensagem; 
    window.open(link)
}

