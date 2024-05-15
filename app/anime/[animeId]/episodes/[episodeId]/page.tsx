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

    const fetchAnimeEpisodes = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/videos/episodes`);

    const animeEpisodes = (await fetchAnimeEpisodes.json()).data.reverse();

    if (await animeEpisodes.length < params.episodeId) {
        notFound();
    }
    const episode = await animeEpisodes[params.episodeId];

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div>
                    <h1 className=" mb-1 font-extrabold leading-none tracking-tight text-white text-md md:text-xl lg:text-2xl">
                        Watch 
                    </h1>
                    <p className='mb-4 text-white'>{ episode.title ? `Episode Title: ${episode.title} - ${ episode.episode }` : '' }</p>
                    <Link href={ episode.url }>
                        <Image
                            src={ `${episode.images.jpg.image_url ? episode.images.jpg.image_url : '/placeholder.png' }` }
                            alt={ episode.title }
                            width={1024}
                            height={578}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                </div>
            </div>
        </section>
        )
    }