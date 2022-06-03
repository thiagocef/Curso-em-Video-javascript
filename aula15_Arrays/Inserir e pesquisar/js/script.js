//VARIÁVEIS GLOBAIS
var inNumero = document.getElementById("inNumero")
var inPesquisar = document.getElementById("inPesquisar")
var outMostrar = document.getElementById("outMostrar")
var outResposta = document.getElementById("outResposta")

//ARREY QUE RECEBERÁ OS NUMEROS INSERIDOS
var caixa = []

//================= FUNÇÃO INSERIR UM NUMERO =======================

function inserirNumero() {
    //variável local
    var numero = Number(inNumero.value)

    if (numero == "" || isNaN(numero)) {
        alert(`Insira um número válido`)
        inNumero.focus()
        return

    } else {
        //array caixa recebe o numero inserido e coloca no final
        caixa.push(numero)
        outMostrar.textContent = caixa
    }
}
    var btInserir = document.getElementById("btInserir")
    btInserir.addEventListener("click", inserirNumero)

//========= FUNÇÃO PESQUISAR O ÍNDICE DE UM NUMERO NO VETOR ============

function pesquisarNumero() {
    //variável local
    var pesquisar = Number(inPesquisar.value)

    if (pesquisar == "" || isNaN(pesquisar)) {
        alert(`Insira um número válido`)
        inPesquisar.focus()
        return
    
    //se o índice for -1, significa que o valor não foi encontrado
    } else if (caixa.indexOf(pesquisar) == -1) {
        outResposta.textContent = `O Número ${pesquisar} não foi encontrado`

    } else {
        outResposta.textContent = `O número ${pesquisar} está no índice ${caixa.indexOf(pesquisar)}`
    }
}
    var btPesquisar = document.getElementById("btPesquisar")
    btPesquisar.addEventListener("click", pesquisarNumero)