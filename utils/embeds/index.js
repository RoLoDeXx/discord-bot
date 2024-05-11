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
    },
    {
      name: "!about",
      value: "Give's a brief about the rdsharma, the bot.",
    }
  )
  .setTimestamp();

const aboutEmbed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Github Repository")
  .setURL("https://github.com/RoLoDeXx/discord-bot")
  .setAuthor({
    name: "RoLoDeXx",
    iconURL: "https://avatars.githubusercontent.com/u/35224521?v=4",
    url: "https://github.com/RoLoDeXx",
  })
  .setDescription(
    "Game khela jata na jhaat bhar, probability nikalta raat bhar ~RD Sharma(probably)"
  )
  .setThumbnail(
    "https://wp.hindi.scoopwhoop.com/wp-content/uploads/2022/05/628623f0dd68f6000102615d_7ec35ee9-b76d-4c48-8ed3-21e0410b9ff2.jpg"
  )
  .setFooter({
    text: "Feels like this bot is missing a feature? Why not contribute?",
  });

export { commandsEmbed, aboutEmbed };
