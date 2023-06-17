import { Client, TextChannel } from "discord.js";
import { Commands } from "../commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        const channel: TextChannel = await client.channels.fetch(process.env.DISCORD_CHANNEL as string) as TextChannel;

        channel.send('Saber is online and ready to padoru!');
    });
};