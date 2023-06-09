import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType, MessagePayload } from "discord.js";
import { getAnimeList, getAnimeSuggestion } from "../external/my-anime-list";
import { Command } from "../command";

export const GetAnime: Command = {
    name: 'get-anime',
    description: 'Returns animes based on the provided name.',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'anime-name',
            description: 'The name of the desired anime you which to search for.',
            type: ApplicationCommandOptionType.String
        },
        {
            name: 'nr-of-results',
            description: 'The number of the desired results.',
            type: ApplicationCommandOptionType.Number,
            required: false
        }
    ],
    run: async (_client: Client, interaction: CommandInteraction) => {
        const animeName = interaction.options.data[0]?.value as string;
        const nrOfResults = interaction.options.data[1]?.value as number;

        var anime = await getAnimeList(animeName, nrOfResults);

        for (const item of anime) {
            const body = `
                **Title**: ${item.title}\n
                Current Ranking: ${item.rank}
                Number of Episodes: ${item.episodes}
                Average Episode Duration: ${item.duration}
                ${item.trailer ? item.trailer.url : item.images.jpg?.large_image_url}
            `

            await interaction.followUp({
                ephemeral: true,
                content: body,
            });
        };  
    }
};