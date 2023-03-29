import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import interactionCreate from './listeners/interaction-create';
import ready from './listeners/ready';

dotenv.config({ path: __dirname+'/.env' });

console.log("Bot is starting...");

const token = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);


client.login(token);

console.log("Bot is ready!")
