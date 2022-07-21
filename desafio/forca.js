// Foca é a classe que possui os métodos para o jogo funcionar
// possui os métodos chutar() buscaEstado() e buscarDadosDoJogo()

class Forca {
  palavra = '';
  constructor(palavraSecreta) {
    this.palavra = palavraSecreta;
  }

  dadosJogo = {
    vidas: 6,  // Deve conter todas as letras chutadas
    letrasChutadas: [],// Quantidade de vidas restantes
    palavra: [], // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  };

  obtemDadosDoJogo() {
    return this.dadosJogo;
  }

  setDadosDoJogo(vidas, letrasChutadas, palavra) {
    (this.dadosJogo.vidas = vidas),
      (this.dadosJogo.letrasChutadas = letrasChutadas),
      (this.dadosJogo.palavra = palavra);
  }

  chutar(letra) {
    if (letra.length > 1) {
      console.log('Não é permitido digitar mais de uma palavra por jogada');
    } else {
      const acertoLetra = this.verificarLetra(letra, this.palavra);
      if (acertoLetra === true) {
        console.log('Foi encontrado uma letra na palavra');
      } else {
        console.log('Letra incorreta');

        var descontoVida = this.dadosJogo.vidas - 1;

        this.setDadosDoJogo(descontoVida, letra, this.palavra);
      }
    }
  }

  verificarLetra(letraDigitada, palavraSecreta) {
    return palavraSecreta.includes(letraDigitada);
  }

  buscarEstado(status) {
    return status; // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  }

  buscarDadosDoJogo() {
    return this.obtemDadosDoJogo();
  }
}

module.exports = Forca;