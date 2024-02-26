require("dotenv").config();

const Discord = require("discord.js");
const GatewayIntentBits = Discord.GatewayIntentBits;
const Client = Discord.Client;
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(message);
  message.reply("hello! I'm under dev, don't expect much.");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
