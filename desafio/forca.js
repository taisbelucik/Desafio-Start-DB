// Foca é a classe que possui os métodos para o jogo funcionar
// possui os métodos chutar() buscaEstado() e buscarDadosDoJogo()

class Forca {
  palavra = "";
  constructor(palavraSecreta) {
    this.palavra = palavraSecreta;
    this.setArrayPalavraSecretaVazio(palavraSecreta);
  }

  dadosJogo = {
    vidas: 6, // Quantidade de vidas restantes
    letrasChutadas: [], // Deve conter todas as letras chutadas
    palavra: [], // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  };

  setArrayPalavraSecretaVazio(palavraSecreta) {
    for (let index = 0; index < palavraSecreta.length; index++) {
      this.dadosJogo.palavra.push("");
    }
  }

  obtemDadosDoJogo() {
    return this.dadosJogo;
  }

  setDadosDoJogo(vidas, letrasChutadas, palavra) {
    (this.dadosJogo.vidas = vidas),
      (this.dadosJogo.letrasChutadas = letrasChutadas),
      (this.dadosJogo.palavra = palavra);
  }

  //VERIFICA SE A LETRA CHUTADA ESTÁ NA PALAVRA SECRETA
  chutar(letra) {
    this.dadosJogo.letrasChutadas.push(letra); //inclui a letra chutada na array letrasChutadas
    if (letra.length > 1) {
      console.log("Não é permitido digitar mais de uma palavra por jogada");
    } else {
      const acertoLetra = this.verificarLetra(letra, this.palavra);
      if (acertoLetra === true) {
        this.verificaPosicao(letra); // chama o método que inclui a letra na posição da palavra
        console.log("Foi encontrado uma letra na palavra!");
      } else {
        //se a letra estiver incorreta diminua uma vida
        var descontoVida = this.verificaLetraChutadaErradaNovamente();
        if (descontoVida === true) {
          var descontoVida = this.dadosJogo.vidas - 1;
          this.dadosJogo.vidas = descontoVida;
        
          console.log("Letra incorreta!");
        } else {
          console.log("Você já chutou essa letra!")
        }
      }
    }
  }

  // VERIFICA SE A LETRA DIGITADA ESTÁ INCLUIDA NA PALAVRA
  verificarLetra(letraDigitada, palavraSecreta) {
    return palavraSecreta.includes(letraDigitada);
  }

  verificaLetraChutadaErradaNovamente(letra) {
    for (let index = 0; index < this.dadosJogo.letrasChutadas.length; index++) {
      const element = this.dadosJogo.letrasChutadas[index];
      if (letra === element) {
        return false;
      } else {
        return true;
      }
    }
  }

  //COLOCA A LETRA DIGITADA NA POSIÇÃO CORRETA
  verificaPosicao(letraChutada) {
    const letra = letraChutada;
    const palavra = this.palavra;
    const palavraSecreta = this.dadosJogo.palavra;
    let palavraArray = [];

    palavraArray = this.transformaPalavraArray();

    palavraArray.forEach((item, index) => {
      if (item === letra) {
        this.dadosJogo.palavra[index] = item;
      }
    });
  }

  //TRANSFORMA A PALAVRA QUE É UMA STRING EM UMA ARRAY
  transformaPalavraArray() {
    const palavra = this.palavra;
    const palavraArray = [];
    for (let index = 0; index < palavra.length; index++) {
      const element = palavra[index];
      palavraArray.push(element);
    }
    return palavraArray;
  }

  buscarEstado(status) {
    const statusJogo = this.verificaPalavra();

    if (statusJogo === true && this.dadosJogo.vidas > 0) {
      return "ganhou";
    }

    if (this.dadosJogo.vidas === 0) {
      return "perdeu";
      
    }

    //return status; // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  }

  verificaPalavra() {
    let contadorPalavra = 0;
    this.dadosJogo.palavra.forEach((item) => {
      if (item !== "") {
        contadorPalavra++;
      }
    });
    if (contadorPalavra === this.dadosJogo.palavra.length) {
      return true;
    } else {
      return false;
    }
  }

  buscarDadosDoJogo() {
    return this.obtemDadosDoJogo();
  }
}

module.exports = Forca;
