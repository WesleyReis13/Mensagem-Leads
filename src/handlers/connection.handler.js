const createBot = require('../bot/bot');

let sock = null;

async function handleConnectionUpdate(update, socketInstance = null) {
  const { connection, lastDisconnect } = update;
  
  if (connection === 'open') {
    console.log('✅ Conectado ao WhatsApp com sucesso!');
    sock = socketInstance; 
  }
  
  if (connection === 'close') {
    const shouldReconnect = lastDisconnect.error?.output?.statusCode !== 401;
    console.log('Conexão fechada.', shouldReconnect ? 'Reconectando...' : 'Por favor, faça novo login.');
    
    if (shouldReconnect) {
      sock = await createBot(); 
    }
  }
}

function getSocketInstance() {
  return sock;
}

module.exports = handleConnectionUpdate;
module.exports.getSocketInstance = getSocketInstance;