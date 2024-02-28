import dotenv from "dotenv";
import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import trulyRandomNumber from "./random.js";

dotenv.config();

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

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
  // return if message is by a bot
  if (message.author.bot) return;

  // Pattern based messages
  // ## !rand
  try {
    if (message.content.startsWith("!rand")) {
      const instruction = message.content.split("!rand")[1].trim();
      const nums = instruction.split(",").map((item) => {
        return item.trim();
      });

      message.reply(`Yele rand, ${nums[trulyRandomNumber(0, nums.length)]}`);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    message.reply("Something went wrong sadly");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
