import { aiScriptModel } from "@/utils/geminiAiModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {prompt}= await req.json()

    const data= await aiScriptModel(prompt)

    return NextResponse.json({result:data})
}