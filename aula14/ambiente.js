function corrida() {
    console.log(`Foi dada a largada!!`)
    for (var c = 1; c <= 8; c++) {
        console.log(`${c}ª volta!`)

        if (c == 7) {
            console.log(`Última volta!`)
        }
    }
    console.log(`Fim da corrida!`)
}
corrida()