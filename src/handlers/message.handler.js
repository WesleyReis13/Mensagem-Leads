
async function handleMessage(messagesUpsert, sock) {
  const message = messagesUpsert.messages[0];
  
  
  if (!message || message.key.remoteJid === 'status@broadcast') return;

  const from = message.key.remoteJid; 
  const messageType = Object.keys(message.message)[0]; 

  
  if (messageType === 'conversation') {
    const text = message.message.conversation.toLowerCase();
    
    
    console.log(`💬 Mensagem recebida de: ${from}`);
    console.log(`Conteúdo: ${text}`);
    
    
    if (text === '!ping') {
      await sock.sendMessage(from, { text: '🏓 Pong!' });
      console.log('➡️ Resposta "Pong!" enviada.');
    }
  }
}

module.exports = handleMessage;