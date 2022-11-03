
// const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

const isIniciarRodada = confirm("Quer iniciar uma nova jogada?")

if (isIniciarRodada) {
    console.log("Boas vinda ao jogo BlackJack!")
    //1) Sortear duas cartas para os dois jogadores
    //2) Comparar valores
    //3) Console log de empate ou venceu
    const cartaJogador1 = comprarCarta()
    const cartaJogador2 = comprarCarta()

    const totalJogador = cartaJogador1.valor + cartaJogador2
    console.log(`Carta Usuário: cartas = ${cartaJogador1.texto} + ${cartaJogador2.texto} = ${totalJogador}`)

    const cartaComputador1 = comprarCarta()
    const cartaComputador2 = comprarCarta()

    const totalComputador = cartaComputador1.valor + cartaComputador2
    console.log(`Carta Computador: cartas = ${cartaComputador1.texto} + ${cartaComputador2.texto} = ${totalComputador}`)

    
    if(totalJogador > totalComputador){
    console.log("Usuário Venceu!")
    }else if(totalJogador < totalComputador){
        console.log("Computador Venceu!")

    }else{
        console.log("Empate!")
    }

} else {
    console.log("Jogo acabou!")
}

