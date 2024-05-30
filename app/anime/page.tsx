import Listing from "@/components/Listing";
import { getTopAnime } from "@/lib/api";

export default async function Page() {

  const top = (await getTopAnime()).data;

  return (
    <>
      <Listing details={top} title="Top Rated Anime" for="anime" />
    </>
  );
}
