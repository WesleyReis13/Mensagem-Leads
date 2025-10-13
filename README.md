# 🤖 Bot de Envio de Mensagens via WhatsApp

Este repositório contém o **bot responsável pelo envio de mensagens automáticas via WhatsApp**, utilizando a biblioteca **Baileys**.  
Ele se conecta a uma instância do WhatsApp Business ou pessoal e processa mensagens com base em filas gerenciadas pelo **BullMQ** e **Redis**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Baileys](https://github.com/WhiskeySockets/Baileys) — Conexão com o WhatsApp Web
- [Redis](https://redis.io/) — Armazenamento e filas
- [BullMQ](https://docs.bullmq.io/) — Gerenciamento e agendamento de mensagens
- [dotenv](https://www.npmjs.com/package/dotenv) — Variáveis de ambiente
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) — Exibição do QR Code no terminal

---

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/nome-do-repositorio-bot.git
cd nome-do-repositorio-bot
```

### 2. Instale as dependências

```bash
npm install
```

---

## ▶️ Executando o Bot

```bash
node src/index.js
```

Ao iniciar, será exibido um **QR Code no terminal**.  
Escaneie-o com o **WhatsApp Web** do número que será usado para enviar as mensagens.

---

## 🔁 Fluxo do Bot

1. O backend adiciona uma mensagem à fila no Redis via BullMQ.  
2. O bot consome essa fila e envia a mensagem via WhatsApp usando Baileys.  
3. Caso o envio seja recorrente, o BullMQ agenda o próximo envio automaticamente.  
4. Logs de conexão e status são exibidos no terminal.

---

## 🧠 Possíveis Extensões Futuras

- Suporte a múltiplas sessões (multi-contas)
- Dashboard para visualização das filas e logs
- Confirmação de leitura e status de entrega

---

👨‍💻 **Desenvolvido por**  
**Wesley Reis**  
Frontend Developer • [LinkedIn](https://www.linkedin.com/in/wesleysnipeslopes/)
