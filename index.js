import dotenv from "dotenv";
import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import commands from "./commands.js";

dotenv.config();

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// try {
//   console.log("Started refreshing application (/) commands.");

//   await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
//     body: commands,
//   });

//   console.log("Successfully reloaded application (/) commands.");
// } catch (error) {
//   console.error(error);
// }

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
  if (message.content.startsWith("!rand")) {
    const instruction = message.content.split("!rand")[1].trim();
    const nums = instruction.split(",").map((item) => {
      return item.trim();
    });

    console.log(instruction);
    message.reply("hello! I'm Supposed to generate a random number");
  }

  // console.log(message);
  // message.reply("hello! I'm under dev, don't expect much.");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
