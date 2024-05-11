import { EmbedBuilder } from "@discordjs/builders";

const commandsEmbed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("List of Commands")
  .setDescription("Here are the available commands:")
  .addFields(
    {
      name: "!pick <item1, item2, item3>",
      value: "Returns a random item from the given list.",
    },
    {
      name: "!rand <number1~number2>",
      value: "Returns a random number between the specified range.",
    }
  )
  .setTimestamp();

export { commandsEmbed };
