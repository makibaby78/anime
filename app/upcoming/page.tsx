import Listing from "@/components/Listing";

export default async function Upcoming() {

  const res = await fetch("https://api.jikan.moe/v4/seasons/upcoming");

  const upcoming = (await res.json()).data;

  return (
      {/* <Listing details={upcoming} title="Upcoming" for="anime" /> */}
  );
}
