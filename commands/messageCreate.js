commandsEmbed;
import { commandsEmbed } from "../utils/embeds/index.js";
import { trulyRandomNumber } from "../utils/random.js";
const errorMessage =
  "Invalid prompt, type '!commands' to see detailed instructions for all commands";

const handleMessageCreateCommands = (message) => {
  // return if message is by a bot
  if (message.author.bot) return;

  try {
    if (message.content.startsWith("!pick")) {
      const instruction = message.content.split("!pick ")[1]?.trim();
      if (!instruction) {
        return message.reply(errorMessage);
      }

      const items = instruction.split(",").map((item) => item.trim());

      message.reply(
        `I picked: ${items[trulyRandomNumber(0, items.length - 1)]}`
      );
    }

    if (message.content.startsWith("!rand")) {
      const instruction = message.content.split("!rand")[1]?.trim();
      if (!instruction) {
        return message.reply(errorMessage);
      }

      const numbers = instruction.split("~");

      const min = parseInt(numbers[0]);
      const max = parseInt(numbers[1]);

      if (isNaN(min) || isNaN(max) || min > max) {
        return message.reply(errorMessage);
      }

      message.reply(`Random number for you is: ${trulyRandomNumber(min, max)}`);
    }

    // # !commands
    // ## generates an embed of list of possible commands of rd sharma
    if (message.content.startsWith("!commands")) {
      message.reply({ embeds: [commandsEmbed] });
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    message.reply("Beep bop, something went wrong while generating a reply :/");
  }
};

export { handleMessageCreateCommands };
