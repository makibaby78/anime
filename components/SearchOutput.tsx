"use client"

import Listing from "@/components/Listing";
import { useSearchParams } from 'next/navigation'
import { getSearchResult } from "@/lib/api";

export default async function Search() {

    const searchParams = useSearchParams()

    const search = searchParams.get('q')

    const searchResult = (await getSearchResult(search)).data;

    return ( 
        <>
            <Listing details={searchResult} title="Search Result" for="anime" />
        </>
    );
}