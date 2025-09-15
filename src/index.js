require('dotenv').config();
const createBot = require('./bot/bot');
const { initQueueConsumer } = require('./services/queue.consumer');

async function main() {
  console.log('🤖 Iniciando serviço do WhatsApp...');
  
  try {
    
    const sock = await createBot(); 
    
    
    initQueueConsumer(sock);
    
    console.log('✅ Serviço inicializado. Aguardando mensagens e jobs...');
  } catch (error) {
    console.error('Erro ao iniciar o serviço:', error);
  }
}

main();