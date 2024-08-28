import Listing from "@/_components/Listing";
import { getTopAnime } from "@/_lib/api";

export default async function Page() {

  const top = (await getTopAnime()).data;

  return (
    <>
      <Listing details={top} title="Top Rated Anime" for="anime" />
    </>
  );
}
