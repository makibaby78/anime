import Header from "@/components/Header";
import Card from "@/components/Card";

export default async function Home() {

  const res = await fetch("https://api.jikan.moe/v4/top/anime");

  const topanime = (await res.json()).data;

  return (
    <>
      <Header/>
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Latest</h1>
        <div className="card-wrapper flex gap-x-2 flex-wrap justify-between">
          {topanime.map((anime: any) => {
            return (
              <div className="card" key={ anime.id }>
                <Card 
                  details={ anime }
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
