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
    }

    //condições
    //homem bebe
    if (masculino && (resultado <= 3)) {
        foto.src = 'img/bebe.jpg'
        outResposta.textContent = `Detectamos um menino de ${resultado} ano(s)`

            //homem criança
        }   else if (masculino && (resultado <= 11)){
            foto.src = 'img/10-anos-homem.jpg'
            outResposta.textContent = `Detectamos uma criança de ${resultado} ano(s)`

            //homem adolescente
        }   else if (masculino && (resultado <= 17)){
            foto.src = 'img/adolescente-homem.jpg'
            outResposta.textContent = `Detectamos um adolescente de ${resultado} ano(s)`

            //homem jovem
        }   else if (masculino && (resultado <= 29)){
            foto.src = 'img/20-anos-homem.jpg'
            outResposta.textContent = `Detectamos um jovem de ${resultado} ano(s)`

            //adulto
        }   else if (masculino && (resultado <= 54)){
            foto.src = 'img/30-anos-homem.jpg'
            outResposta.textContent = `Detectamos um adulto de ${resultado} ano(s)`

            //jovem senhor
        }   else if (masculino && (resultado <= 72)){
            foto.src = 'img/55-anos-homem.jpg'
            outResposta.textContent = `Detectamos um jovem senhor de ${resultado} ano(s)`

            //idoso 
        }   else if (masculino && (resultado > 72)) {
            foto.src = 'img/80-anos-homem.jpg'
            outResposta.textContent = `Detectamos um idoso de ${resultado} ano(s)`
        }

    //===========================================================================
    if (feminino && (resultado <= 3)) {
    foto.src = 'img/bebe-menina.jpg'
    outResposta.textContent = `Detectamos uma menina de ${resultado} ano(s)`

        }    //mulher criança
            else if (feminino && (resultado <= 11)){
            foto.src = 'img/10-anos-menina.jpg'
            outResposta.textContent = `Detectamos uma criança de ${resultado} ano(s)`

            //mulher adolescente
        }   else if (feminino && (resultado <= 17)){
            foto.src = 'img/adolescente-mulher.jpg'
            outResposta.textContent = `Detectamos uma adolescente de ${resultado} ano(s)`

            //mulher jovem
        }   else if (feminino && (resultado <= 29)){
            foto.src = 'img/20-anos-mulher.jpg'
            outResposta.textContent = `Detectamos uma jovem de ${resultado} ano(s)`

                //adulto
            }   else if (feminino && (resultado <= 54)){
                foto.src = 'img/30-anos-mulher.jpg'
                outResposta.textContent = `Detectamos um adulta de ${resultado} ano(s)`

                    //jovem senhor
                }   else if (feminino && (resultado <= 72)){
                    foto.src = 'img/55-anos-mulher.jpg'
                    outResposta.textContent = `Detectamos uma jovem senhora de ${resultado} ano(s)`

                //idoso 
            }   else if (feminino && (resultado > 72)) {
                foto.src = 'img/80-anos-mulher.jpg'
                outResposta.textContent = `Detectamos uma idosa de ${resultado} ano(s)`
            }
}   
    //referencia ao botão btVerificar
    var btVerificar = document.getElementById("btVerificar")

    //criando evendo ao clicar no botão
    btVerificar.addEventListener("click", verificarIdade)
