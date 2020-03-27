const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");
const db = require("quick.db")
client.login(TOKEN);
client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();

client.on("ready", () => {
	console.log(`${client.user.username} ready!`);
   const link = "https://discordapp.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8";
   console.log(`Davet : [${link}]!!`)
});
client.on("warn", info => console.log(info));
client.on("error", console.error);


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

const talkedRecently = new Set();
client.on("message", async message => {
  
  if (message.author.bot) return;
  if (!message.guild) return;

if (message.content.startsWith(PREFIX)) {
    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      if (talkedRecently.has(message.author.id)) {
        return message.channel.send("`4.5` Saniye de Bir Komut Kullanabilirsin");
      } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 4500);
      }
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Bu komut yürütülürken bir hata oluştu.").catch(console.error);
    }
  }
});

const dc = require("discord.jsv2");
const dcc = new dc.Client();

client.ayar = db;
client.config = require("./config.js");
client.ayarlar = require("./config.js")

dcc.ayar = db;
dcc.config = require("./config.js");
dcc.ayarlar = require("./config.js")


require("./modules/functions.js")(dcc);

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  dcc.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
    dcc.appInfo = await client.fetchApplication();
  }, 60000);
  require("./modules/dashboard.js")(dcc, client);
});

dcc.login(TOKEN);