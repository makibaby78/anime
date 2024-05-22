import Listing from "@/components/Listing";
import { getUpcomingAnime } from "@/lib/api";

export default async function Upcoming() {

  const upcoming = (await getUpcomingAnime()).data;

  return (
    <>
      <Listing details={upcoming} title="Upcoming Anime" for="anime" />
    </>
  );
}
