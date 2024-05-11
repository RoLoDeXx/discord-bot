import dotenv from "dotenv";
import { REST, Client, Routes } from "discord.js";
dotenv.config();

const commands = [
  {
    name: "zing",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

async () => {
  try {
    await rest.put(Routes.applicationGuildCommands());
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};

export default commands;
