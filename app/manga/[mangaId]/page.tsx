import Image from "next/image";
import Link from 'next/link'

export default async function Page({ params } : any) {

    const fetchManga = await fetch(`https://api.jikan.moe/v4/manga/${params.mangaId}/full`);

    const manga = (await fetchManga.json()).data;

    console.log(manga)

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex md:flex-row flex-col items-start gap-4 text-white">
                    <div className="md:w-1/4 w-full flex md:flex-col flex-row gap-x-4">
                        <div className="md:w-full w-2/4">
                            <Image
                                src={ `${manga.images.jpg.image_url}` }
                                alt={ manga.title_japanese }
                                width={225}
                                height={318}
                                style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
                                className="mb-4"
                            />
                        </div>
                        <ul className="pl-4 list-disc text-xs md:w-full w-2/4">
                            <li className="mb-2">English Title: { manga.title_english }</li>

                            { manga.authors !=0 && <>
                            <li className="mb-2">Authors: {manga.authors.map((author: any, index: number) => {
                                return manga.authors.length - 1 === index ?
                                    <span key={index}><Link href={ author.url }>{ author.name }</Link>.</span>
                                :
                                    <span key={index}><Link href={ author.url }>{ author.name }</Link>, </span>
                            })}
                            </li></>}

                            <li className="mb-2">Status: { manga.status }</li>

                            { manga.published.from && 
                                <li className="mb-2">Aired: { `${manga.published.prop.from.day}/${manga.published.prop.from.month}/${manga.published.prop.from.year}` }{ manga.published.to && <>{ ` - ${manga.published.prop.to.day}/${manga.published.prop.to.month}/${manga.published.prop.to.year}` }</> }</li>
                            }

                            { manga.type && 
                                <li className="mb-2">Type: { manga.type }</li>
                            }

                            { manga.volumes && 
                                <li className="mb-2">Volumes: { manga.volumes }</li>
                            }

                            { manga.chapters && 
                                <li className="mb-2">Chapters: { manga.chapters }</li>
                            }

                            { manga.episodes && 
                                <li className="mb-2">Episodes: { manga.episodes }</li>
                            }

                            { manga.genres.length !=0 && <>
                            <li className="mb-2">Genres: {manga.genres.map((genre: any, index: number) => {
                                return manga.genres.length - 1 === index ?
                                    <span key={index}><Link href={ `/genres/manga/${genre.mal_id}/${genre.name}` }>{ genre.name }</Link>.</span>
                                :
                                    <span key={index}><Link href={ `/genres/manga/${genre.mal_id}/${genre.name}` }>{ genre.name }</Link>, </span>
                            })}
                            </li></>}

                            { manga.duration && 
                                <li className="mb-2">Duration: { manga.duration }</li>
                            }

                            { manga.rating && 
                                <li className="mb-2">Rating: { manga.rating }</li>
                            }

                            { manga.score && 
                                <li className="mb-2">Score: { manga.score }</li>
                            }

                            { manga.rank && 
                                <li className="mb-2">Rank: { manga.rank }</li>
                            }
                        </ul>
                    </div>
                    <div className="md:w-3/4 w-full">
                        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-md md:text-xl lg:text-2xl">
                            { manga.title }
                        </h1>

                        <p className="mb-5 text-sm">
                            { manga.synopsis }
                        </p>

                    </div>
                </div>
                { manga.relations.length !=0 &&
                <div className=" bg-gray-950 p-4 text-white">
                    <h4 className="mb-2">Other Information</h4>
                    {manga.relations.map((relation: any, index: number) => {
                        return (
                            <p className="mb-2 text-xs" key={index}>
                                <span className="text-white capitalize">{ relation.relation }: </span> 
                                    {relation.entry.map((entry: any, index: number) => {
                                        return relation.entry.length - 1 === index ?
                                            <span key={index}>
                                                <Link className="cs-link" href={ `/${entry.type}/${entry.mal_id}` }>
                                                    { entry.name }
                                                </Link>
                                            .</span>
                                        :
                                            <span key={index}>
                                                <Link className="cs-link" key={index} href={ `/${entry.type}/${entry.mal_id}` }>
                                                    <span className="cs-link">{ entry.name }</span>
                                                </Link>
                                            , </span>
                                    })}
                            </p>
                        )
                    })}
                </div>}
            </div>
        </section>
    )
}