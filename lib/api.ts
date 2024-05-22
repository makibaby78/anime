import { error } from "console";

export const getAnime = async (id:any) => {
    const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);

    return anime.json();
}

export const getAnimeEpisodes = async (id:any) => {
    const episodes = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos/episodes`);

    return episodes.json();
}

export const getAnimeEpisode = async (animeId:any, episodeId:any) => {
    const episode = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/episodes/${episodeId}`);

    return episode.json();
}

export const getAnimeEpisodePicture = async (animeId:any) => {

    const picture = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/pictures`);

    return picture.json();
    
}

export const getTopAnime = async () => {
    const topAnime = await fetch("https://api.jikan.moe/v4/top/anime");

    return topAnime.json();
}

export const getUpcomingAnime = async () => {
    const upcomingAnime = await fetch("https://api.jikan.moe/v4/seasons/upcoming");

    return upcomingAnime.json();
}

export const getLatestAnime = async () => {
    const latestAnime = await fetch("https://api.jikan.moe/v4/schedules");

    return latestAnime.json();
}

export const getTopManga = async () => {
    const topManga = await fetch("https://api.jikan.moe/v4/top/manga");

    return topManga.json();
}

export const getCharacterRankings = async (page:any) => {
    const characterRankings = await fetch(`https://api.jikan.moe/v4/top/characters?page=${page}`);

    return characterRankings.json();
}

export const getCharacter = async (id:any) => {
    const character = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`);

    return character.json();
}