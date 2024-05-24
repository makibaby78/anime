import Listing from "@/components/Listing";
import { getSearchResult } from "@/lib/api";

export default async function Page({ params } : any) {

  const search = (await getSearchResult(params.search)).data;

  return (
    <>
      <Listing details={search} title="Seach Result" for="anime" />
    </>
  );
}
