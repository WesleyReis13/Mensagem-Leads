
async function sendTextMessage(sock, to, text) {
  if (!sock || typeof sock.sendMessage !== 'function') {
    throw new Error('Socket do Baileys não está pronto');
  }

  
  const jid = (typeof to === 'string' && to.includes('@'))
    ? to
    : `${String(to).replace(/\D/g, '')}@c.us`;

  console.log('➡️ sendTextMessage -> jid:', jid, 'text:', text);

  return await sock.sendMessage(jid, { text });
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
    
   
  }
}


module.exports = {
  sendTextMessage,
  processMessage
};