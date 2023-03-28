import { Client, TextChannel } from "discord.js";
import { Commands } from "../commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        const channel = await client.channels.fetch('780400089696174135') as TextChannel;

        channel.send('Saber is online and ready to padoru!');
    });
};