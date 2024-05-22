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