function gerarTabuada() {
    //referencia aos elementos HTML
    let inNumero = document.getElementById("inNumero")
    let outResultado = document.getElementById("outResultado")

    //recebendo o valor digitado no input
    let numero = Number(inNumero.value)

    //fazendo a repetição
    let c = 1
    let resposta = " "
    
    while (c <= 10) {
        resposta = `${numero} X ${c} = ${numero * c}`
        
        outResultado.textContent = resposta
        c++
    }
}