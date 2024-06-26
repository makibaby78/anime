import Listing from "@/components/Listing";
import { getTopAnime } from "@/lib/api";

export default async function Page() {

  const topanime = (await getTopAnime()).data;

  return (
    <>
      <Listing details={topanime} title="Top Rated Anime" for="anime" />
    </>
  );
}
