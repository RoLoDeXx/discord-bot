import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { handleMessageCreateCommands } from "./commands/messageCreate.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  handleMessageCreateCommands(message);
});

client.login(process.env.TOKEN);
