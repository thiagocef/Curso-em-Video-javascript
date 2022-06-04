///variáveis globais
let inNumero = document.getElementById("inNumero")
let outCadastrados = document.getElementById("outCadastrados")
let cadastro = [] //array para receber os numeros

//============= FUNÇÃO CADASTRAR ==============

function cadastrar() {
    var numero = Number(inNumero.value)

    //verificando se o número foi informado corretamente
    if(numero == "" || isNaN(numero) || numero < 1 || numero > 100) {
        alert(`Insira um número entre 1 e 100`)
        inNumero.focus()
        return

    } else { //cadastrando os numeros no array cadastro
        cadastro.push(numero)//insere no final do array
        outCadastrados.textContent = cadastro
    }
}
    //chamando a função cadastrar
    var btAdicionar = document.getElementById("btAdicionar")
    btAdicionar.addEventListener("click", cadastrar)


//============= FUNÇÃO ANALISAR ==============
function analisar() {
    var outTotal = document.getElementById("outTotal")
    var outMaior = document.getElementById("outMaior")
    var outMenor = document.getElementById("outMenor")
    var outSoma = document.getElementById("outSoma")
    var outMedia = document.getElementById("outMedia")

    //os números em ordem crescente
    var ordem = cadastro.sort(function(a, b){
        return a - b
    }) 
    
    //tamanho o array (quantidade de valores)
    var total = cadastro.length 
    outTotal.textContent = `Ao todo, temos ${total} números cadastrados`

    //pegando ultimo índice
    //após o cadastro.sort(), o útimo será o maior
    var maior = cadastro[cadastro.length - 1] 
    outMaior.textContent = `O maior número informado é ${maior}`

    //pegando o primeiro índice
    //após o cadastro.sort(), o primeiro será o menor
    var menor = ordem[0] 
    outMenor.textContent = `O menor número é ${menor}`

    //somando os número
    var soma = 0

    for (var c = 0; c < total; c++) {
        soma += cadastro[c] //c percorre o array e soma cada número
        outSoma.textContent = `A soma dos números é ${soma}` 
    }

    //média dos números
    var media = soma / total
    outMedia.textContent = `A média dos números é ${media.toFixed(2)}`

   //------------------------------------------------------------------ 
    var outOrdem = document.getElementById("outOrdem")
    outOrdem.textContent = `Em ordem ficam: ${ordem}`
   //------------------------------------------------------------------ 
}
    var btFinalisar = document.getElementById("btFinalizar")
    btFinalisar.addEventListener("click", analisar)