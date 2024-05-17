import Listing from "@/components/Listing";

export default async function Genre({ params } : any) {

  const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${params.genreId}`);

  const animeGenre = (await res.json()).data;

  return (
      <Listing details={animeGenre} title={`Genre ${params.genreName}`} for="anime" />
  );
}
