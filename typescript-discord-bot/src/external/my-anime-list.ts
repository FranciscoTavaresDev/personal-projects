import { Mal, Jikan4 } from 'node-myanimelist';

export async function getAnimeList(animeName: string, nrOfResults: number = 5) {

    const anime = await Jikan4.animeSearch({
        q: animeName,
        limit: nrOfResults
    });

    return anime;
}

export class MalService {
    constructor(private readonly account: Mal.MalAcount) {}
}