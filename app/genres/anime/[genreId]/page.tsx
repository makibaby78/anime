import Listing from "@/components/Listing";

export default async function Genre({ params } : any) {

  const res = await fetch(`https://api.jikan.moe/v4/anime?genre=${params.genreId}`);

  const animeGenre = (await res.json()).data;

  const genreListing = await fetch(`https://api.jikan.moe/v4/genres/anime`);
  
  return (
    <>
        <Listing details={animeGenre} title={`Genre ${params.genreId}`} for="genre" />
    </>
  );
}
