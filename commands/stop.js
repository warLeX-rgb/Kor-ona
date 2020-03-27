module.exports = {
  name: "dur",
  description: "Müziği durdurursunuz.",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voiceChannel)
      return message.reply("Önce bir ses kanalına katılmanız gerekiyor!").catch(console.error);
    if (!serverQueue) return message.reply("Şuan çalan bir müzik bulunmamakta.").catch(console.error);

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send(`${message.author} ⏹ Müziği durdurdu!`).catch(console.error);
  }
};
