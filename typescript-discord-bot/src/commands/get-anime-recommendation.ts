import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType, MessagePayload } from "discord.js";
import { getAnimeList, getAnimeSuggestion } from "../external/my-anime-list";
import { Command } from "../command";

export const GetRecommendedAnime: Command = {
    name: 'get-anime-recommendation',
    description: 'Returns recommended animes.',
    type: ApplicationCommandType.ChatInput,
    options: [],
    run: async (_client: Client, interaction: CommandInteraction) => {

        var anime = await getAnimeSuggestion();

        anime.data.

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