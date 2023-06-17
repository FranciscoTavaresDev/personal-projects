import { Command } from "./command";
import { GetAnime } from "./commands/get-anime";
import { GetRecommendedAnime } from "./commands/get-anime-recommendation";
import { Goodbye } from "./commands/goodbye";
import { Hello } from "./commands/hello";

export const Commands: Command[] = [GetRecommendedAnime, GetAnime, Hello, Goodbye];