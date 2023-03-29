import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType, MessagePayload } from "discord.js";
import { getAnimeList } from "src/external/my-anime-list";
import { Command } from "../command";

export const GetAnime: Command = {
    name: 'get-anime',
    description: 'Returns animes based on the inputed name. '
                + 'The number of returned matches depends on user input, by default its 5.',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'animeName',
            description: 'The name of the desired anime you which to search for.',
            type: ApplicationCommandOptionType.String
        },
        {
            name: 'nrOfResults',
            description: 'The number of the desired results.',
            type: ApplicationCommandOptionType.Number,
            required: false
        }
    ],
    run: async (_client: Client, interaction: CommandInteraction) => {
        console.log(interaction.options.data);
        const animeName = interaction.options.data[0].value as string;
        const nrOfResults = interaction.options.data[1]?.value as number || undefined;

        // Here I still need to do the actual call to my-anime-list service
        const anime = getAnimeList(animeName, nrOfResults);

        const content = `You are currently earching for ${nrOfResults} items matching your query: ${animeName}!`;
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};