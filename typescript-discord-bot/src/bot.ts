import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import interactionCreate from './listeners/interaction-create';
import ready from './listeners/ready';

dotenv.config({ path: __dirname+'/.env' });

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.DISCORD_TOKEN);
console.log("Bot is ready!")
