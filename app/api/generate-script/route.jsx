import { NextResponse } from "next/server"

export async function POST(req) {
    const {prompt}= await req.json()

    return NextResponse.json({result:prompt})
}