import Listing from "@/_components/Listing";

export default async function Page({ params } : any) {

  const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${params.genreId}`);

  const animeGenre = (await res.json()).data;

  return (
    <>
      <Listing details={animeGenre} title={`Genre ${params.genreName}`} for="anime" />
    </>
  );
}
