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

    //repetição
    for (var inicio = 0; inicio <= fim; passo) {
        outResultado.textContent = `${inicio}, `
    }
}
    //referencia ao botão
    var btContar = document.getElementById("btContar")
    //adicionando evento ao clicar no botão e chamando a função contar
    btContar.addEventListener("click", contar)