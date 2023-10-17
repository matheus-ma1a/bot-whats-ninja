const mensagens = [
  {
    assets: './videos/WhatsApp Video 1.mp4',
    mensagens: `
📹 Vamos começar o dia com esse vídeo ⏰
Preste atenção e se prepare para o dia de hoje!! 
https://bit.ly/depositar30ganha60
☝️ Se não cadastrou, já fique pronto para os sinais! 
🐯🐯🐯
    `
  },
  {
    assets: './videos/WhatsApp Video 2.mp4',
    mensagens: `
🙏 É MUITO BOM OUVIR ISSO!
🚀 Bora seguir em frente com os sinais do Tigre! 
A parte da tarde hoje vai ser forte, família!  ❤️
🐯🐯✅✅🐯🐯
Ainda não está ganhando? Cadastre-se no link abaixo
Deposite R$30 e comece a jogar!  👇 
https://bit.ly/depositar30ganha60 
    `
  },
  {
    assets: './videos/WhatsApp Video 3.mp4',
    mensagens: `
🎁 O Tigre dando presente de aniversário! 🎁
🔥 Isso mesmo! Olhe esse resultado de uma aluna daqui do grupo. 
Por qual motivo você ainda não começou? 🤔
Se cadastre e comece a jogar agora mesmo! 👇👇 
https://bit.ly/depositar30ganha60
    `
  },
  {
    assets: './videos/WhatsApp Video 4.mp4',
    mensagens: `
🏠 O TIGRE PAGANDO ATÉ ALUGUEL! 
Olhe esse resultado!! 😍
Aproveitou a oportunidade que mandamos e garantiu o aluguel 🔥
🐯 Aproveite que em breve vamos enviar mais sinais! 
Clique no link, cadastre, deposite e dobre o seu saldo 
https://bit.ly/depositar30ganha60
    `
  },
  {
    assets: './imagens/WhatsApp Image 1.jpeg',
    mensagens: `
🗡️😱 SACRIFICANDO O TIGRE DE MADRUGADA

Olha a mensagem que tô recebendo de quem segue os sinais  👆

🤑🐯 Venha vencer o Tigre também! 🐯🤑

https://bit.ly/depositar30ganha60

Clique no link e venha jogar
    `

  }
];

export default function sendMessage() {
  const numeroAleatorio = Math.floor(Math.random() * mensagens.length);
  const mensagemAleatoria = mensagens[numeroAleatorio];
  return mensagemAleatoria;
}



