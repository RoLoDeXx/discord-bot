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

  try {
    // # !rand <item1, item2, item3>
    // ## returns a random item
    if (message.content.startsWith("!pick")) {
      const instruction = message.content.split("!pick")[1];
      const nums = instruction.split(",").map((item) => {
        return item.trim();
      });

      message.reply(`I picked: ${nums[trulyRandomNumber(0, nums.length - 1)]}`);
    }

    // # !rand <number1~number2>
    // ## returns a random number between the range
    else if (message.content.startsWith("!rand")) {
      const instruction = message.content.split("!rand")[1].trim();
      const nums = instruction.split("~");

      const min = parseInt(nums[0]);
      const max = parseInt(nums[1]);

      if (
        min > max ||
        typeof min !== "number" ||
        typeof max !== "number" ||
        isNaN(min) ||
        isNaN(max)
      )
        return message.reply("Invalid !rand prompt!");

      message.reply(
        `Random number for you is: ${trulyRandomNumber(
          parseInt(min),
          parseInt(max)
        )}`
      );
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
