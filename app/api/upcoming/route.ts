import { NextResponse } from "next/server";

export async function GET() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/seasons/upcoming`);

    const responseData = await res.json();

    return NextResponse.json( responseData  );
}