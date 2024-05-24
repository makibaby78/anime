import { NextResponse } from "next/server";

export async function GET(request:any, { params } : any) {

    const res = await fetch('https://api.jikan.moe/v4/anime');

    const responseData = await res.json();

    const datas = responseData.data;

    const result = datas.filter((data:any) => data.title.toLowerCase().includes("cow"));

    return NextResponse.json( result );
}