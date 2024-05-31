import Image from "next/image";
import Link from 'next/link'
import { getCharacter } from "@/lib/api";

export default async function Page({ params } : any) {

    const character = (await getCharacter(params.characterId)).data;

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg text-white">
                <div className="flex items-start gap-x-4 text-white">
                    <div className="w-1/4">
                        <Image
                            src={ `${character.images.webp.image_url}` }
                            alt={ character.name }
                            width={225}
                            height={318}
                            style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
                            className="mb-4"
                            unoptimized
                        />
                    </div>
                    <div className="w-3/4">
                        <h1 className="mb-2 font-extrabold leading-none tracking-tight text-md md:text-xl lg:text-2xl">
                            { character.name } ( { character.name_kanji } )
                        </h1>
                        <div className="mb-2 flex items-center gap-x-1">
                            <svg
                                className="text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="text-sm text-white">{ character.favorites }</span> 
                        </div>
                        <p className="mb-5 text-sm">
                            { character.about }
                        </p>
                    </div>
                </div>
                { character.anime.length !=0 &&
                <div className=" bg-gray-950 p-4 text-white mb-2">
                    <h4 className="mb-2">Anime</h4>
                    {character.anime.map((item: any, index: number) => {
                        return (
                            <p className="mb-2 text-xs" key={index}>
                                <span className="text-white capitalize">{ item.role }: </span> 
                                <span>
                                    <Link className="cs-link" href={ `/anime/${item.anime.mal_id}` }>
                                        { item.anime.title }
                                    </Link>
                                </span>
                            </p>
                        )
                    })}
                </div>}
                { character.manga.length !=0 &&
                <div className=" bg-gray-950 p-4 text-white mb-2">
                    <h4 className="mb-2">Manga</h4>
                    {character.manga.map((item: any, index: number) => {
                        return (
                            <p className="mb-2 text-xs" key={index}>
                                <span className="text-white capitalize">{ item.role }: </span> 
                                <span>
                                    <Link className="cs-link" href={ `/manga/${item.manga.mal_id}` }>
                                        { item.manga.title }
                                    </Link>
                                </span>
                            </p>
                        )
                    })}
                </div>}
                { character.voices.length !=0 &&
                <div className=" bg-gray-950 p-4 text-white mb-2">
                    <h4 className="mb-2">Voices</h4>
                    {character.voices.map((item: any, index: number) => {
                        return (
                            <p className="mb-2 text-xs" key={index}>
                                <span className="text-white capitalize">{ item.language }: </span> 
                                <span>
                                    <Link className="cs-link" href={ `/person/${item.person.mal_id}` }>
                                        { item.person.name }
                                    </Link>
                                </span>
                            </p>
                        )
                    })}
                </div>}
            </div>
        </section>
    )
}