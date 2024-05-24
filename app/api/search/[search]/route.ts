import { NextResponse } from "next/server";

export async function GET(request:any, { params } : any) {

    const search = params.search.toLowerCase();

    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);

    const responseData = await res.json();

    return NextResponse.json( responseData );
}