import Image from "next/image";
import Link from 'next/link'
import { getLatestAnime } from "@/lib/api";

export default async function Page() {

  const latest = (await getLatestAnime()).data;

  return (
    <section className="py-5 p-4">
      <div className="container mx-auto max-w-screen-lg">
          <h1 className="capitalize mb-4 font-extrabold leading-none tracking-tight text-white text-md md:text-xl lg:text-2xl">
            Latest
          </h1>
          <div className="card-wrapper flex gap-x-4 gap-y-4 flex-wrap justify-between">
              {latest?.map((item: any, index: number) => {
              return (
                  <div className="card overflow-hidden" key={ index }>
                    <div className="image-wrapper rounded shadow w-full overflow-hidden flex items-center bg-white">
                      <Link href={ `/anime/${item.mal_id}`}>
                          <Image
                              src={ `${item.images.jpg.image_url}` }
                              alt={ item.title }
                              width={225}
                              height={318}
                              className="object-cover"
                          />
                      </Link>
                    </div>
                    <h4 className="text-white font-bold mt-2 text-sm">{ item.title }</h4>
                    { item.genres.length != 0 && 
                      <div className="flex gap-x-1 gap-y-1 flex-wrap mt-2">
                        {item.genres?.map((genre: any, index: number) => {
                        return (
                            <Link key={ index } href={ `/genres/anime/${genre.mal_id}/${genre.name.toLowerCase()}`}>
                                <div className="p-1 text-xs text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                    { genre.name }
                                </div>
                            </Link>
                        )
                        })}
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
