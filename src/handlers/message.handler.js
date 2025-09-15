const { processMessage } = require('../services/message.service');

async function handleMessage(messagesUpsert, sock) {
  const message = messagesUpsert.messages[0];
  if (!message || message.key.remoteJid === 'status@broadcast') return;

  
  await processMessage(message, sock);
}

module.exports = handleMessage;