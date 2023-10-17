import venom from 'venom-bot'


const canal = '120363189030507727@g.us'
const link = 'http://bit.ly/-CorretoraPaganteAqui'

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function gerarNumeroAleatorio(max, min) {

  const numeroAleatorio = Math.random();
  const numeroNoIntervalo = numeroAleatorio * (max - min) + min;
  const numeroFinal = Math.floor(numeroNoIntervalo);

  return numeroFinal;
}

function gerarNumeroEntre9701e9999() {
  const min = 97.01;
  const max = 99.99;
  const numero = Math.random() * (max - min) + min;
  return numero.toFixed(2); // Arredonda para duas casas decimais
}

function horaMinutos2(minutos) {
  const expiryTime = 3; // tempo de expiração em minutos
  const now = new Date();
  const expiry = new Date(now.getTime() + minutos * 60 * 1000);
  const hours = String(expiry.getHours()).padStart(2, '0');
  const minutes = String(expiry.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`
}

async function start(client) {

  client.onMessage((message) => {

    if (message.body == 'Boa') {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

  });

  primeira()

  function primeira() {
    setTimeout(() => {
      client.sendText(canal, `
🥷 Buscando *Cortes Pagantes!* 🥷

Coooorre e já se cadastra que esse novo jogo ta pagando muito e ainda está escondido nas plataformas

📲 *CLIQUE AQUI PARA SE REGISTRAR:* ${link}
      `);
      segunda()
    })
  }

  function segunda() {
    setTimeout(() => {
      client.sendText(canal, `
✅ *ENTRADA INDENTIFICADA* ✅

      🥷 *Ninja Crash* 🥷

Siga a Quantidade de Cortes
            ⚔️  ${gerarNumeroAleatorio(5, 13)}X  ⚔️

⚠ Válido das ${horaMinutos2(0)} ÁS ${horaMinutos2(3)}

📱Link para abrir *Ninja Crash*
${link}

*${gerarNumeroEntre9701e9999()}% de chance de GANHO!!*
      `);
      terceira()
    }, 18000)
  }

  function terceira() {
    setTimeout(() => {
      client.sendText(canal, `
✅✅✅ *BATEEEU!* ✅✅✅

🍬 QUEM CORTOU TODOS OS DOCINHOS LUCROU MUITO, AGUARDE A PRÓXIMA ENTRADA E JÁ ME ENVIEM OS SEUS GANHOS NO PRIVADO
      `)
      primeira()
    }, 30000)
  }



  // function adicionarMinutos(horaOriginal, minutosParaAdicionar) {
  //   const partesDaHora = horaOriginal.split(":");

  //   if (partesDaHora.length !== 2) {
  //     // Certifique-se de que a string de entrada está no formato correto
  //     return "Formato de hora inválido. Use o formato 'hh:mm'.";
  //   }

  //   const horas = parseInt(partesDaHora[0], 10);
  //   const minutos = parseInt(partesDaHora[1], 10);

  //   if (isNaN(horas) || isNaN(minutos)) {
  //     // Certifique-se de que as horas e minutos sejam números válidos
  //     return "Formato de hora inválido. Use o formato 'hh:mm'.";
  //   }

  //   // Adicione os minutos fornecidos à hora original
  //   const novaHora = new Date(0, 0, 0, horas, minutos + minutosParaAdicionar);

  //   // Formate a nova hora manualmente no formato 'hh:mm'
  //   const horasFormatadas = String(novaHora.getHours()).padStart(2, '0');
  //   const minutosFormatados = String(novaHora.getMinutes()).padStart(2, '0');

  //   return `${horasFormatadas}:${minutosFormatados}`;
  // }


  // presinal()

  // function presinal() {


  //   setTimeout(() => {

  //     const numero = gerarNumeroAleatorio(8, 15)
  //     const tempoInicial = obterHoraAtualEAcrescentarMinutos(numero)
  //     const tempoFinal = obterHoraAtualEAcrescentarMinutos(gerarNumeroAleatorio(28, 31))

  //     tempoFinalGlobal = tempoFinal
  //     tempoInicialGlobal = tempoInicial

  //     client.sendText(canal, `
  // 🚨 Falta ${numero} minutos para ativar o nosso *HACK DENTRO DA CASA!*  🚨

  // Como você está? Preparado para ganhar uma grana daqui 8 minutos? Já estou ansioso para jogarmos todos juntos 🔥

  // ⏰ Horário da Sessão: *${tempoInicial} ÀS ${tempoFinal}*

  // Enquanto aguardamos o sinal, aproveitem para realizar o cadastro na plataforma onde descobrimos esse *HACK DENTRO DA CASA* .

  // 📲 CLIQUE AQUI PARA SE REGISTRAR: bit.ly/registroflybet
  //   `)
  //     primeiraMsg(tempoInicial, tempoFinal, numero)
  //   }, gerarNumeroAleatorio(8, 15) * 60000)
  // }

  // function primeiraMsg(tempoInicial, tempoFinal, tempo) {


  //   setTimeout(() => {

  //     client.sendText(canal, `

  // ✅ ENTRADA CONFIRMADA ✅

  // 🐯 FORTUNE TIGER ☘

  // ⚠ Válido das ${tempoInicial} ÁS ${tempoFinal}

  // ESTRATÉGIA 👇🏻

  // 📊Estratégia que vamos usar:
  // ${gerarNumeroAleatorio(5, 19)}x R$0,40 [NORMAL]
  // ${gerarNumeroAleatorio(5, 18)}x R$0,40 [TURBO]
  // ${gerarNumeroAleatorio(4, 19)}x R$0,40 [AUTÓMATICO]


  // 🎁 CADASTRE-SE E GANHE ATÉ 200% DE BÔNUS NESSA PLATAFORMA.
  // https://bit.ly/registroflybet

  // 📱 Jogar Fortune Tiger 🐯
  // https://bit.ly/registroflybet

  // ⚠ SINAL SÓ FUNCIONA NA PLATAFORMA ACIMA!

  //   `,)
  //   }, tempo * 60000)
  // }

  // setInterval(() => {
  //   const opcoes_texto1 = ["MEGA GANHO", "GRANDE GANHO", "SUPER GANHO", "SUPER MEGA GANHO", "GREEN"]
  //   const indiceAleatorio = Math.floor(Math.random() * opcoes_texto1.length);

  //   if (horaMinutos2() == tempoFinalGlobal) {

  //     client.sendText(
  //       canal, `

  // 🐯✅ GREEN NO FORTUNE TIGER ✅🐯

  // RESULTADOS	


  // ⏰ ${adicionarMinutos(tempoInicialGlobal, 5)}	✅💸 ${opcoes_texto1[indiceAleatorio]}
  // ⏰ ${adicionarMinutos(tempoInicialGlobal, 8)}	✅💸 ${opcoes_texto1[indiceAleatorio]}
  // ⏰ ${adicionarMinutos(tempoInicialGlobal, 10)}	✅💸 ${opcoes_texto1[indiceAleatorio]}
  // ⏰ ${adicionarMinutos(tempoInicialGlobal, 7)}	✅💸 ${opcoes_texto1[indiceAleatorio]}

  // 🚨⚠ SESSÃO FINALIZADA ⚠🚨		 

  // AGUARDE A PRÓXIMA SESSÃO E ME ENVIEM OS SEUS GANHOS NO PRIVADO 💥🥇		 

  // 📲 CLIQUE AQUI PARA CADASTRAR : https://bit.ly/registroflybet

  //         `)
  //     presinal()
  //   }

  // }, 60000)


}
