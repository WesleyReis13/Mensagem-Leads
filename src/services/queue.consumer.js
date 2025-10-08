
const { Worker } = require('bullmq');
const { sendTextMessage } = require('./message.service');
const Redis = require('redis');


const redisConnection = {
  host: 'localhost', 
  port: 6379
};


let sock = null;

function initQueueConsumer(socketInstance) {
  sock = socketInstance; 
  
  const worker = new Worker('whatsapp-messages', async (job) => {
    console.log(`🎯 Processando job ${job.id} | Tipo: ${job.name}`);
    
    try {
      if (job.name === 'send-welcome-message') {
        const { to, text } = job.data;
        await sendTextMessage(sock, to, text);
      }

      if (job.name === 'send-campaign-message') {
        const { to, text } = job.data;
        await sendTextMessage(sock, to, text);
      }
      
    } catch (error) {
      console.error('❌ Erro ao processar job:', error);
      
    }
  }, { 
    connection: redisConnection 
  });

  
  worker.on('completed', (job) => {
    console.log(`✔️ Job ${job.id} finalizado com sucesso!`);
  });

  worker.on('failed', (job, err) => {
    console.error(`💥 Job ${job.id} falhou:`, err);
  });

  console.log('👷 Worker da fila iniciado. Ouvindo por jobs...');
}

module.exports = { initQueueConsumer };