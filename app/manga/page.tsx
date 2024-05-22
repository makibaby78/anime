import Listing from "@/components/Listing";
import { getTopManga } from "@/lib/api";

export default async function Manga() {

  const manga = (await getTopManga()).data;

  return (
    <>
      <Listing details={manga} title="Top Rated Manga" for="manga" />
    </>
  );
}
