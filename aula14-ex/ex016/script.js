function contar() {
    var inInicio = document.getElementById("inInicio")
    var inFim = document.getElementById("inFim")
    var inPasso = document.getElementById("inPasso")
    var outResultado = document.getElementById("outResultado")

    var inicio = Number(inInicio.value)
    var fim = Number(inFim.value)
    var passo = Number(inPasso.value)

    if (inicio == "" || fim == "" || passo == "") {
        alert("[E R R O]")
    } else {
        outResultado.innerHTML = 'Contando... <br>'

            if (inicio < fim) {

            for (var c = inicio; c <= fim; c += passo) {
                outResultado.innerHTML += `${c}, `
            }
        } else {
            for (var c = inicio; c >= fim; c -= passo) {
                outResultado.innerHTML += `${c}, `
            }
        }
        outResultado.innerHTML += `.`
    }
}

    var btContar = document.getElementById("btContar")
    btContar.addEventListener("click", contar)