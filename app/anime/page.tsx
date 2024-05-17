import Listing from "@/components/Listing";

export default async function Anime() {

  const res = await fetch("https://api.jikan.moe/v4/top/anime");

  const top = (await res.json()).data;

  return (
    // <Listing details={top} title="Top Rated Anime" for="anime" />
  );
}
