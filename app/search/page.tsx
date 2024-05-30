"use client";

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Listing from "@/components/Listing";
import { Suspense } from "react";
import Loading from "../loading";

export default function Page() {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')

    const [data, setData] = useState(null);

    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {

        fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
                setLoading(false)
        })
        
    }, [search])

    if (isLoading) return <Loading />
    if (!data) return <main className="text-center"><h2 className="text-primary text-white font-bold">No profile data</h2></main>

    return (
        <Suspense fallback={<Loading />}>
            <Listing details={data} title="Search result" for="anime" />
        </Suspense>
  );
}
