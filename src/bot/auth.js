const { useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function setupAuth() {
  
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  return { state, saveCreds };
}

module.exports = { setupAuth };