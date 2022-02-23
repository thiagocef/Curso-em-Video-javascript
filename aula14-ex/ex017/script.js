function gerarTabuada() {
    var inNumero = document.getElementById("inNumero")
    var tabuada = document.getElementById("selTab")

    

    if (inNumero.value.length == 0) {
        alert("Digite um número")
    } else {
       
        var numero = Number(inNumero.value)
        tabuada.innerHTML = ''//começa vazio
        for(c = 1; c<= 10; c++) {
            //cria um elemento HTML do tipo option
            var item = document.createElement("option")
            item.text = `${numero} X ${c} = ${numero*c}`
            
            //cria um elemento filho dentro do select id="selTab"
            tabuada.appendChild(item)
        }
    }
}
