const { default: makeWASocket, useMultiFileAuthState, Browsers } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const handleMessage = require('../handlers/message.handler');

async function createBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');

  
  const sock = makeWASocket({
    auth: state,
    
    browser: Browsers.ubuntu('Chrome')
  });

  sock.ev.on('messages.upsert', (data) => handleMessage(data, sock));
  
  sock.ev.on('creds.update', saveCreds);
  
  
  sock.ev.on('connection.update', (update) => {
    const { connection, qr } = update;
    
    
    if (qr) {
      console.log('📶 Escaneie o QR Code abaixo para conectar:');
      qrcode.generate(qr, { small: true });
    }
    
    if (connection === 'open') {
      console.log('✅ Conectado ao WhatsApp com sucesso!');
    }
    
    if (connection === 'close') {
      console.log('❌ Conexão fechada. Tentando reconectar...');
      setTimeout(() => createBot(), 5000); 
    }
  });

  return sock;
}

module.exports = createBot;