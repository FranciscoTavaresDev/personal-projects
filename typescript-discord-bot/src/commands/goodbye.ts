import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../command";

export const Goodbye: Command = {
    name: "goodbye",
    description: "Returns a farewell",
    type: ApplicationCommandType.ChatInput,
    
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "See you later!";
        
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};