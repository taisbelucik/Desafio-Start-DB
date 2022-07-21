// Foca é a classe que possui os métodos para o jogo funcionar
// possui os métodos chutar() buscaEstado() e buscarDadosDoJogo()

class Forca {
   palavra = ''
  constructor(palavraSecreta){
    this.palavra = palavraSecreta

  }


  chutar(letra) {
    if (letra.length > 1) {
      console.log("Não é permitido digitar mais de uma palavra por jogada");
    }else{
    const acertoLetra = this.verificarLetra(letra, this.palavra )
     if(acertoLetra === true){
      console.log('Foi encontrado uma letra na palavra')
     } else {
      //console.log('Letra incorreta')
      // console.log("chegou aqui", this.buscarDadosDoJogo)
      this.buscarDadosDoJogo(null, true, null)
     }

    }
  }

  verificarLetra(letraDigitada, palavraSecreta){
   return palavraSecreta.includes(letraDigitada)
  }

  buscarEstado(status) {
    return status;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo(pLetrasChutadas, pVidas, pPalavra) {
    const letrasChutadas = [] // Deve conter todas as letras chutadas
    let vidas = 6 // Quantidade de vidas restantes
    const palavra = []
    debugger
    if(pVidas === true) {
      console.log("chegou aqui")
      vidas = --vidas
      console.log(vidas)
    } 

    const dadosJogo = {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
    return dadosJogo
  }
}

module.exports = Forca;
