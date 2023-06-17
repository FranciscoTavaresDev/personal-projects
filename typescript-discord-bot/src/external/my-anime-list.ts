import { Mal, Jikan4 } from 'node-myanimelist';

export async function getAnimeList(animeName: string, nrOfResults: number = 5) {

    const anime = await Jikan4.animeSearch({
        q: animeName,
        limit: nrOfResults
    });

    return anime.data;
}

export async function getAnimeSuggestion() {
 
    const anime = await Jikan4.animeRecommendations()

    return anime;
}

export class MalService {
    constructor(private readonly account: Mal.MalAcount) {}
}