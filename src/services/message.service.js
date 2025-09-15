
async function sendTextMessage(sock, to, text) {
  try {
    await sock.sendMessage(to, { text: text });
    console.log(`✅ Mensagem enviada para ${to}: ${text}`);
  } catch (error) {
    console.error(`❌ Erro ao enviar mensagem para ${to}:`, error);
    throw error; 
  }
}


async function processMessage(message, sock) {
  const from = message.key.remoteJid;
  const messageType = Object.keys(message.message)[0];

  
  if (messageType === 'conversation') {
    const text = message.message.conversation.toLowerCase();
    
    console.log(`💬 Mensagem recebida de: ${from}`);
    console.log(`Conteúdo: ${text}`);

    
    if (text === '!ping') {
      await sendTextMessage(sock, from, '🏓 Pong!');
    }
    
   if (text === '!galo') {
      await sendTextMessage(sock, from, 'Doido!');
    }
  }
}


module.exports = {
  sendTextMessage,
  processMessage
};