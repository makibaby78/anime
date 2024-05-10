import Card from "@/components/Card";

export default function Listing(props: any) {

    return (
        <section className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <h1 className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 text-md md:text-xl lg:text-2xl">{ props.title }</h1>
                <div className="card-wrapper flex gap-x-4 gap-y-4 flex-wrap justify-between">
                    {props.details.map((anime: any, index: number) => {
                    return (
                        <div className="card" key={ index }>
                        <Card 
                            details={ anime }
                        />
                        </div>
                    )
                    })}
                </div>
            </div>
        </section>
    );
}