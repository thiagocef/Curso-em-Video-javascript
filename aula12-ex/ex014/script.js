function carregar() {
    //referencia aos elementos HTML
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date() //data atual
    var hora = data.getHours() //hora atual

    var hora = 22 //teste de horas
    //altera o conteudo da div #msg
    msg.textContent = `Agora são ${hora}h`

    if (hora >= 0 && hora < 12) {
        //bom dia
        imagem.src = "img/manhã.jpg" //imagem mostra a imagem escolhida
        document.body.style.background = "#C2CACC" //muda o background do body
        document.getElementById("msg").style.color ="#C2CACC"

    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        imagem.src = 'img/tarde.jpg' //imagem mostra a imagem escolhida
        document.body.style.background = "#8F5A32" //muda o background do body
        document.getElementById("msg").style.color ="#8F5A32"
        
    } else {
        //boa noite
        imagem.src = 'img/noite.jpg' //imagem mostra a imagem escolhida
        document.body.style.background = "#232730" //muda o background do body
        document.getElementById("msg").style.color ="#232730"
    }

}

