const { MessageEmbed } = require("discord.js");
const config = require("../config.json");
const prefix = config.PREFIX
module.exports = {
  name: "help",
  description: "Yardım komutlarını gösterir.",
  execute(message) {
    let embed = new MessageEmbed()
    .setTitle(`Yardım - Rythm Bot`)
    .addField(prefix + 'help', `Bütün komutları ve açıklamaları gösterir.`, true)
    .addField(prefix + 'loop', `Yeniden oynatmayı açıp kapatmanızı sağlar.`, true)
    .addField(prefix + 'stop', `Çalan müziği durdurur.`, true)
    .addField(prefix + 'çal', `Youtube'den şarkı açmanızı sağlar.`, true)
    .addField(prefix + 'playlist', `Youtube'den oynatma listesi açmanızı sağlar.`, true)
    .addField(prefix + 'kuyruk', `Müzik kuyruğunu gösterir.`, true)
    .addField(prefix + 'kaldır', `Müzik kuyruğundan şarkı kaldırmanıza yarar.`, true)
    .addField(prefix + 'devam', `Durdurulan müziği oynatmaya devam eder.`, true)
    .addField(prefix + 'geç', `Çalan şarkıyı geçer.`, true)
    .addField(prefix + 'dur', `Müziği durdurur.`, true)
    .addField(prefix + 'ses', `Müziğin sesini değiştirir`, true)
    //.addField('Links!', `\n-[İnvite Link](https://discordapp.com/oauth2/authorize?client_id=661927248483450920&scope=bot&permissions=8)\n-[Supporter Server](https://discord.gg/CvzYypW)`)
    .setColor("#F8AA2A")
    .setTimestamp();
    return message.channel.send(embed);
  }
};
 