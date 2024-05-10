import Listing from "@/components/Listing";

export default async function Latest() {

  const res = await fetch("https://api.jikan.moe/v4/schedules");

  const latest = (await res.json()).data;

  return (
    <>
      <Listing details={latest} title="Latest"/>
    </>
  );
}
