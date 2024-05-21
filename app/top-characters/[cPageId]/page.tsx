import Image from "next/image";
import Link from 'next/link'
import Pagination from "@/components/Pagination";
import Loading from "../../loading";
import { Suspense } from "react";

export default async function TopCharacters({ params } : any) {

    const res = await fetch(`https://api.jikan.moe/v4/top/characters?page=${params.cPageId}`);

    const resJson = (await res.json());
    
    const charactersData = resJson.data;
    const pagination = resJson.pagination;

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <h1 className="mb-4 font-extrabold leading-none tracking-tight text-white text-md md:text-xl lg:text-2xl">
                    Top Favorite Characters
                </h1>
                <Suspense fallback={<Loading />}>  
                    <div>
                        <Pagination pagination={pagination} currentPage={params.cPageId} />
                    </div>
                    <div className="card-wrapper flex gap-x-4 gap-y-4 flex-wrap justify-between">
                        {charactersData?.map((character: any, index: number) => {
                        return (
                            <div className="card overflow-hidden" key={ index }>
                                <div className="image-wrapper rounded shadow w-full overflow-hidden flex items-center bg-white">
                                    <Link href={ `/characters/${character.mal_id}`}>
                                        <Image
                                            src={ `${character.images.jpg.image_url}` }
                                            alt={ character.name }
                                            width={225}
                                            height={318}
                                            className="object-cover"
                                        />
                                    </Link>
                                </div>
                                <h4 className="text-white font-bold mt-2 text-sm">{ character.name }</h4>
                                { character.favorites && 
                                    <div className="mt-2 flex items-center gap-x-1">
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
                                        <span className="text-xs text-white">{ character.favorites }</span> 
                                    </div>
                                }
                            </div>
                        )
                        })}
                    </div>
                </Suspense>
            </div>
        </section>
    )
}