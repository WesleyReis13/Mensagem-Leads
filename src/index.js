require('dotenv').config();
const createBot = require('./bot/bot');

async function main() {
  console.log('🤖 Iniciando serviço do WhatsApp...');
  await createBot();
  console.log(' Aguardando escanear o QR Code...');
}

main().catch(console.error);