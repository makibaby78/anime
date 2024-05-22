import Image from "next/image";
import Link from 'next/link'
import { getTopManga } from "@/lib/api";

export default async function Manga() {

  const manga = (await getTopManga()).data;

  return (
    <section className="py-5 p-4">
      <div className="container mx-auto max-w-screen-lg">
          <h1 className="capitalize mb-4 font-extrabold leading-none tracking-tight text-white text-md md:text-xl lg:text-2xl">
            Top Rated Manga
          </h1>
          <div className="card-wrapper flex gap-x-4 gap-y-4 flex-wrap justify-between">
              {manga?.map((item: any, index: number) => {
              return (
                  <div className="card overflow-hidden" key={ index }>
                    <div className="image-wrapper rounded shadow w-full overflow-hidden flex items-center bg-white">
                      <Link href={ `/manga/${item.mal_id}`}>
                          <Image
                              src={ `${item.images.jpg.image_url}` }
                              alt={ item.title }
                              width={225}
                              height={318}
                              priority
                              className="object-cover"
                          />
                      </Link>
                    </div>
                    <h4 className="text-white font-bold mt-2 text-sm">{ item.title }</h4>
                    { item.genres.length != 0 && 
                      <div className="flex gap-x-1 gap-y-1 flex-wrap mt-2">
                        {item.genres?.map((genre: any, index: number) => {
                        return (
                            <Link key={ index } href={ `/genres/manga/${genre.mal_id}/${genre.name.toLowerCase()}`}>
                                <div className="p-1 text-xs text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                    { genre.name }
                                </div>
                            </Link>
                        )
                        })}
                      </div>
                    }
                    { item.score && 
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
                          <span className="text-xs text-white">{ item.score }</span> 
                      </div>
                    }
                  </div>
              )
              })}
          </div>
      </div>
    </section>
  );
}
