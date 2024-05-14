import Image from "next/image";
import Link from 'next/link'

export default async function AnimeDetails({ params } : any) {

    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/full`);

    const anime = (await res.json()).data;

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex items-start gap-x-4 text-white">
                    <div className="w-1/4">
                        <Image
                            src={ `${anime.images.jpg.image_url}` }
                            alt={ anime.title_japanese }
                            width={225}
                            height={318}
                            style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
                            className="mb-4"
                        />
                        <ul className="pl-4 list-disc text-xs">
                            <li className="mb-2">English Title: { anime.title_english }</li>

                            <li className="mb-2">Status: { anime.status }</li>

                            { anime.aired.from && 
                                <li className="mb-2">Aired: { `${anime.aired.prop.from.day}/${anime.aired.prop.from.month}/${anime.aired.prop.from.year}` }{ anime.aired.to && <>{ ` - ${anime.aired.prop.to.day}/${anime.aired.prop.to.month}/${anime.aired.prop.to.year}` }</> }</li>
                            }

                            { anime.type && 
                                <li className="mb-2">Type: { anime.type }</li>
                            }

                            { anime.episodes && 
                                <li className="mb-2">Episodes: { anime.episodes }</li>
                            }

                            { anime.producers.name && 
                                <li className="mb-2">Producers: { anime.producers[0].name }</li>
                            }

                            { anime.genres.length !=0 && <>
                            <li className="mb-2">Genres: {anime.genres.map((genre: any, index: number) => {
                                return anime.genres.length - 1 === index ?
                                    <span key={index}><Link href={ genre.url }>{ genre.name }</Link>.</span>
                                :
                                    <span key={index}><Link href={ genre.url }>{ genre.name }</Link>, </span>
                            })}
                            </li></>}

                            { anime.studios.length !=0 && <>
                            <li className="mb-2">Studios: {anime.studios.map((studio: any, index: number) => {
                                return anime.studios.length - 1 === index ?
                                    <span key={index}><Link href={ studio.url }>{ studio.name }</Link>.</span>
                                :
                                    <span key={index}><Link href={ studio.url }>{ studio.name }</Link>, </span>
                            })}</li></>}

                            { anime.licensors.length !=0 && <>
                            <li className="mb-2">Licensors: {anime.licensors.map((licensor: any, index: number) => {
                                return anime.licensors.length - 1 === index ?
                                    <span key={index}><Link href={ licensor.url }>{ licensor.name }</Link>.</span>
                                :
                                    <span key={index}><Link href={ licensor.url }>{ licensor.name }</Link>, </span>
                            })}</li></>}

                            { anime.duration && 
                                <li className="mb-2">Duration: { anime.duration }</li>
                            }

                            { anime.rating && 
                                <li className="mb-2">Rating: { anime.rating }</li>
                            }

                            { anime.score && 
                                <li className="mb-2">Score: { anime.score }</li>
                            }

                            { anime.rank && 
                                <li className="mb-2">Rank: { anime.rank }</li>
                            }
                        </ul>
                    </div>
                    <div className="w-3/4">
                        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-md md:text-xl lg:text-2xl">
                            { anime.title }
                        </h1>
                        <p className="mb-5 text-sm">
                            { anime.synopsis }
                        </p>
                        { anime.trailer.embed_url && 
                        <div className="mb-5">
                            <h3 className="mb-4 font-extrabold leading-none tracking-tight text-sm md:text-lg lg:text-xl">
                                Trailer
                            </h3>
                            <iframe width="100%" height="440px" src={ anime.trailer.embed_url } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        }
                        { anime.relations.length !=0 && <>
                        <div className=" bg-gray-950 p-4">
                            <h4 className="mb-2">Other Information</h4>
                            {anime.relations.map((relation: any, index: number) => {
                                return (
                                    <p className="mb-2 text-xs" key={index}>
                                        <span className="text-white capitalize">{ relation.relation }: </span> 
                                            {relation.entry.map((entry: any, index: number) => {
                                                return relation.entry.length - 1 === index ?
                                                (
                                                    <span key={index}>
                                                        <Link className="cs-link" href={ `/${entry.type}/${entry.mal_id}` }>
                                                            { entry.name }
                                                        </Link>
                                                    .</span>
                                                )
                                                :
                                                (
                                                    <span key={index}>
                                                        <Link className="cs-link" key={index} href={ `/${entry.type}/${entry.mal_id}` }>
                                                            <span className="cs-link">{ entry.name }</span>
                                                        </Link>
                                                    , </span>
                                                )
                                            })}
                                    </p>
                                )
                            })}
                        </div></>}
                    </div>

                </div>
            </div>
        </section>
    )
}