// Foca é a classe que possui os métodos para o jogo funcionar
// possui os métodos chutar() buscaEstado() e buscarDadosDoJogo()

class Forca {
  palavra = '';
  constructor(palavraSecreta) {
    this.palavra = palavraSecreta;
    this.setArrayPalavraSecretaVazio(palavraSecreta);
  }

  dadosJogo = {
    vidas: 6, // Quantidade de vidas restantes
    letrasChutadas: [], // Deve conter todas as letras chutadas
    palavra: [], // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  };

  // PEGA O COMPRIMENTO DA PALAVRA SECRETA, CRIANDO ESPAÇOS PARA INCLUIR AS LETRAS NO ARRAY DA PALAVRA SECRETA
  setArrayPalavraSecretaVazio(palavraSecreta) {
    for (let index = 0; index < palavraSecreta.length; index++) {
      this.dadosJogo.palavra.push('');
    }
  }

  obtemDadosDoJogo() {
    return this.dadosJogo;
  }

  // TRANSFORMA EM ATRIBUTOS GLOBAIS
  setDadosDoJogo(vidas, letrasChutadas, palavra) {
    (this.dadosJogo.vidas = vidas),
      (this.dadosJogo.letrasChutadas = letrasChutadas),
      (this.dadosJogo.palavra = palavra);
  }

  //VERIFICA SE A LETRA CHUTADA ESTÁ NA PALAVRA SECRETA
  chutar(letra) {
    if (letra.length > 1) { //não aceitar que quantidade de letras digitadas for mais que 1
      console.log('Não é permitido digitar mais de uma palavra por jogada');
    } else {
      const acertoLetra = this.verificarLetra(letra, this.palavra);
      if (acertoLetra === true) {
        this.verificaPosicao(letra); // chama o método que inclui a letra correta na posição da palavra
        console.log('Foi encontrado uma letra na palavra!');
      } else {
        if (this.dadosJogo.letrasChutadas.length > 0) {
          //se a letra estiver incorreta diminua uma vida
          var descontoVida = this.verificaLetraChutadaErradaNovamente(letra);
          if (descontoVida !== true) {
            var descontoVida = this.dadosJogo.vidas - 1;
            this.dadosJogo.vidas = descontoVida;
            this.dadosJogo.letrasChutadas.push(letra); //inclui a letra chutada na array letrasChutadas

            console.log('Letra incorreta!');
          } else {
            console.log('Você já chutou essa letra!');
          }
        } else {
          var descontoVida = this.dadosJogo.vidas - 1;
          this.dadosJogo.vidas = descontoVida;
          this.dadosJogo.letrasChutadas.push(letra);
          console.log('Letra incorreta!');
        }
      }
    }
  }

  // VERIFICA SE A LETRA DIGITADA ESTÁ INCLUIDA NA PALAVRA
  verificarLetra(letraDigitada, palavraSecreta) {
    return palavraSecreta.includes(letraDigitada);
  }

  //VERIFICA SE UMA LETRA QUE NÃO ESTÁ NA PALAVRA FOI DIGITADA DUAS VEZES
  verificaLetraChutadaErradaNovamente(letra) {
    let existeLetra;
    for (let index = 0; index < this.dadosJogo.letrasChutadas.length; index++) {
      const element = this.dadosJogo.letrasChutadas[index];
      if (letra === element) {
        existeLetra = true;
      }
    }

    return existeLetra;
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

  //VERIFICA SE ACERTOU TODAS AS LETRAS ENQUANTO HAVIAM VIDAS: GANHOU
  // SE TERMINAR AS VIDAS: PERDEU
  buscarEstado(status) {
    const statusJogo = this.verificaPalavra();

    if (statusJogo === true && this.dadosJogo.vidas > 0) {
      return 'ganhou';
    }

    if (this.dadosJogo.vidas === 0) {
      return 'perdeu';
    }

    //return status; // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  }

  //VERIFICA O TAMANHO DA PALAVRA PARA INSERIR AS STRINGS VAZIAS
  verificaPalavra() {
    let contadorPalavra = 0;
    this.dadosJogo.palavra.forEach((item) => {
      if (item !== '') {
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
