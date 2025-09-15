// src/index.js
require('dotenv').config();
const createBot = require('./bot/bot');
const { initQueueConsumer } = require('./services/queue.consumer');

async function main() {
  console.log('🤖 Iniciando serviço do WhatsApp...');
  
  try {
    // Aguarda a criação e conexão do bot
    const sock = await createBot(); // Inicia o Bot e retorna a instância
    
    // Inicia o consumidor da fila, passando a instância do Baileys
    initQueueConsumer(sock);
    
    console.log('✅ Serviço inicializado. Aguardando mensagens e jobs...');
  } catch (error) {
    console.error('❌ Erro ao iniciar o serviço:', error);
  }
}

main();