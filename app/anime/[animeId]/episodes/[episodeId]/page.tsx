import Link from 'next/link';
import Image from "next/image";
import { notFound } from 'next/navigation';

export default async function Episode({ 
            params,
        } : {
            params: {
                animeId: string;
                episodeId: number;
            };
    }) {

    const fetchAnime = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/full`);

    const anime = (await fetchAnime.json()).data;

    const fetchAnimeEpisodes = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/videos/episodes`);

    const animeEpisodes = (await fetchAnimeEpisodes.json()).data.reverse();

    if (await animeEpisodes.length < params.episodeId) {
        notFound();
    }

    const fetchEpisode = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/episodes/${params.episodeId}`);

    const episode = (await fetchEpisode.json()).data;

    if (!episode) {
        notFound();
    }

    const fetchAnimeImage = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/pictures`);

    const animeImage = (await fetchAnimeImage.json()).data[0].jpg.image_url;

    const fetchAnimeVideos = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/videos`);

    const animeVideos = (await fetchAnimeVideos.json()).data;

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div>
                    <h1 className=" mb-1 font-extrabold leading-none tracking-tight text-white text-md md:text-xl lg:text-2xl">
                        Watch { anime.title }
                    </h1>
                    { episode.title &&
                    <p className='mb-4 text-white'>
                        { episode.title } - Episode - { episode.mal_id }
                    </p>}
                    <div className='mb-4'>
                        <Link href={ episode.url }>
                            <Image
                                src={ `${animeImage ? animeImage : '/placeholder.png' }` }
                                alt={ episode.title }
                                width={1024}
                                height={578}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </Link>
                    </div>
                    { episode.synopsis &&
                    <p className='mb-4 text-white'>
                        { episode.synopsis }
                    </p>}
                    <div className="mb-5">
                        <h4 className="mb-2 font-semibold text-white">Episodes</h4>
                        <ul className="flex gap-3 flex-wrap">
                            {animeEpisodes.map((episode: any, index: number) => {
                                return (
                                    <li className={`episode-box ${ episode.mal_id === params.episodeId ? 'episode-box-active' : '' }`} key={ index }>
                                        <Link href={ `/anime/${params.animeId}/episodes/${episode.mal_id}` }>
                                            <span className="w-full block py-1 px-2">{ episode.mal_id }</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        )
    }