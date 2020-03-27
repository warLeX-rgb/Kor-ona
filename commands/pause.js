module.exports = {
  name: "pause",
  description: "Pause the currently playing music",
  execute(message) {
    const sira = message.client.queue.get(message.guild.id);
    if (!message.member.voice.channel)return message.reply("Önce bir ses kanalına katılmanız gerekiyor!").catch(console.error);
    if(!message.member.voice.channel == sira.channel) return message.reply("Botun bulunduğu bir ses kanalında olmanız ").catch(console.error);
    if (sira && sira.playing) {
      sira.playing = false;
      sira.connection.dispatcher.pause();
      return sira.textChannel.send(`${message.author} ⏸ paused the music.`).catch(console.error);
    }
    return message.reply("Şuan çalan bir müzik bulunmamakta.").catch(console.error);
  }
};
