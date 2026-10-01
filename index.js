const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || 'universalsmp.net',
    port: Number(process.env.MC_PORT || 25565),
    username: process.env.MC_USERNAME || 'Yts_DexTer_Nh',
    auth: 'offline'
  })

  bot.once('spawn', () => {
    console.log('Bot conectado.')

    setTimeout(() => {
      bot.chat(`/login ${process.env.MC_PASSWORD}`)
    }, 3000)

    setTimeout(() => {
      bot.chat('/afk')
    }, 6000)
  })

  bot.on('kicked', reason => {
    console.log('Bot expulsado:', reason)
  })

  bot.on('error', err => {
    console.log('Error:', err.message)
  })

  bot.on('end', () => {
    console.log('Bot desconectado. Reconectando en 10 segundos...')
    setTimeout(createBot, 10000)
  })
}

createBot()
