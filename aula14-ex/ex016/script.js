/*
a função foi chamada diretamente na tag HTML <input button> com onclick="contar()"
*/
function contar() {
    //referencia aos elementos HTML
    var inInicio = document.getElementById("inInicio")
    var inFim = document.getElementById("inFim")
    var inPasso = document.getElementById("inPasso")
    var outResultado = document.getElementById("outResultado")
  
    //recebendo os valores digitados 
    var inicio = Number(inInicio.value)
    var fim = Number(inFim.value)
    var passo = Number(inPasso.value)

    //se o tamanho for igual a zero
    if (inInicio.value.length == 0 || inFim.value.length == 0 || inPasso.value.length == 0) {
        alert(`[ERRO] Preencha os campos corretamente`)
        location.reload() //recarrega a página
        return
    } else {
        if (passo <= 0) {
            alert(`Passo inválido! Considerando passo = 1`)
            passo = 1
        }

        //alterando o conteúdo de outResultado
        outResultado.innerHTML = `Contando... <br>`
    
        if (inicio < fim) {
        //repetição - contagem crescente
                for (var c = inicio; c <= fim; c += passo) {
                    //+= outResultado pega o que ja tem(Contando...) e concatena com o valor recebido (c)                        
                    outResultado.innerHTML += ` ${c} \u{1F449}` //adicionando emoji
                } 
        }  else {
                //repetição - contagem decrescente
                for (var c = inicio; c >= fim; c -= passo) {
                    outResultado.innerHTML += ` ${c} \u{1F449}`
                }
            }
        
        //+= outResultado pega o que ja tem(c) e concatena com o valor recebido (\u{1F3C1}) 
        outResultado.innerHTML += `\u{1F3C1}`
   }
}   
    /*-----------------------------------------------------------------------------------------
    neste programa, a função foi chamada diretamente na tag HTML <input button> com onclick="contar()"
    portanto, não foi necessário fazer referencia ao botão
    -----------------------------------------------------------------------------------------*/

    /*
    //referencia ao botão
    var btContar = document.getElementById("btContar")
    //adicionando evento ao clicar no botão e chamando a função contar
    btContar.addEventListener("click", contar)
    */