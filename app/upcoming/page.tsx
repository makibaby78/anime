import Listing from "@/_components/Listing";
import { getUpcomingAnime } from "@/_lib/api";

export default async function Page() {

  const upcoming = (await getUpcomingAnime()).data;

  return (
    <>
      <Listing details={upcoming} title="Upcoming Anime" for="anime" />
    </>
  );
}
