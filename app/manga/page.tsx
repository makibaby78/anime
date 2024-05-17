import Listing from "@/components/Listing";

export default async function Manga() {

  const res = await fetch("https://api.jikan.moe/v4/top/manga");

  const manga = (await res.json()).data;

  return (
    <>
      <Listing details={manga} title="Top Rated Manga" for="manga" />
    </>
  );
}
