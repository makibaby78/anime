import Listing from "@/components/Listing";

export default async function Home() {

  const res = await fetch("https://api.jikan.moe/v4/top/anime");

  const topanime = (await res.json()).data;

  return (
    <>
      <Listing details={topanime} title="Top" />
    </>
  );
}
