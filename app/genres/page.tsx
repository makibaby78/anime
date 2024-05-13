
export default async function Genres() {

  const res = await fetch("https://api.jikan.moe/v4/genres/anime");

  const genres = (await res.json()).data;

  return (
    <section className="py-5 p-4">
        <div className="container mx-auto max-w-screen-lg">
            <h1 className="mb-4 font-extrabold leading-none tracking-tight text-white text-md md:text-xl lg:text-2xl">Genres</h1>
            <div className="listing-genres">
                <ul className="text-white list-disc pl-4 columns-4">
                    {genres.map((genre: any, index: number) => {
                    return (
                        <li className="mb-2" key={ genre.mal_id }>{ genre.name }</li>
                    )
                    })}
                </ul>
            </div>
        </div>
    </section>
  );
}
