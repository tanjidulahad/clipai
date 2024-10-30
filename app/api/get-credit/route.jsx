import { checkUserExist } from "@/utils/checkUserExist"
import { NextResponse } from "next/server"

export async function GET(req){
    const email= req.nextUrl.searchParams.get('email')
    const user= await checkUserExist(email)

    return NextResponse.json({user})
}