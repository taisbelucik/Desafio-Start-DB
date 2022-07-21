//desafio = utiliza a classe forca pra utilizar os métodos dela
//pega o que o usuário digita


const readline = require('readline-sync'); // chama o arquivo readline-sync que permite que sejam informados dados ao sistema utilizando-se da linha de comando.
const Forca = require('./forca'); // chama o arquivo forca.js


const jogo = new Forca('abacaxi'); // gera um objeto a partir da classe Forca cria um objeto para ter acesso aos métodos da classe Forca



while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) { //Enquando não perder e não ganhar quero que o jogo continue e faça...
    const chute = readline.question("Aguardando chute: \n"); // Fazer no terminal
    jogo.chutar(chute);  //adiciona em jogo o metodo chutar passando chute
    console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());
