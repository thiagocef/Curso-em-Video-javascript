function verificarIdade() {
    //referencia aos elementos HTML
    var inNascimento = document.getElementById("inNascimento")
    var inMasculino = document.getElementById("inMasculino")
    var inFeminino = document.getElementById("inFeminino")
    var outResposta = document.getElementById("outResposta")
    var imagem = document.getElementById("imagem")

    //pegando o ano atual
    var data = new Date()
    var ano = data.getFullYear()

    //recebendo os valores
    var nascimento = Number(inNascimento.value)
    var masculino = inMasculino.checked
    var feminino = inFeminino.checked
    var resultado = ano - nascimento

    //verificando se os dados foram preenchidos corretamente
    //se o tamanho(length) do valor(value) do inNascimento for 0 ou maior que o ano 
    if (inNascimento.value.length == 0 || Number(inNascimento.value) > ano){
        alert(`[ERRO] - Preencha os dados corretamente`)
        location.reload() //recarrega a página e limpa os campos
        return
    }

    document.getElementById("inNascimento").focus()

    if(masculino && (resultado <= 3)) {
        foto.src = 'img/bebe.jpg'
        outResposta.textContent = `Detectamos um menino de ${resultado} ano(s) `
    
    }   else if ((feminino && (resultado < 3))) {
        foto.src = 'img/bebe-menina.jpg'
        outResposta.textContent = `Detectamos uma menina de ${resultado} ano(s) `
    }

}
    //referencia ao botão btVerificar
    var btVerificar = document.getElementById("btVerificar")

    //criando evendo ao clicar no botão
    btVerificar.addEventListener("click", verificarIdade)