require('dotenv').config();
const createBot = require('./bot/bot');
const { initQueueConsumer } = require('./services/queue.consumer');

async function main() {
  console.log('🤖 Iniciando serviço do WhatsApp...');
  await createBot();
  initQueueConsumer(sock);
  console.log(' Aguardando escanear o QR Code...');
}

main().catch(console.error);